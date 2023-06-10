// src/server.js
import {
	Factory,
	Model,
	belongsTo,
	createServer,
	RestSerializer,
	Serializer,
	hasMany,
} from 'miragejs';
import { faker } from '@faker-js/faker';
import database from '../playground/configs/database.json';


Serializer.extend({
	include(request, resource) {
		return Object.keys(this.schema.associationsFor(resource.modelName));
	}
});

const search = (items, query, keys) => {
	return items.filter((item) => {
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			let value = item[key];
			value = value.toLowerCase();

			if (value.includes(query)) {
				return true;
			}
		}
	});
};

const sortArray = (array, key, order) => {
	return array.sort((a, b) => {
		const aValue = a[key];
		const bValue = b[key];

		const aa = parseInt(aValue);
		const bb = parseInt(bValue);

		if (isNaN(aa) || isNaN(bb)) {
			if (order === 'asc') {
				return aValue.localeCompare(bValue);
			}

			return bValue.localeCompare(aValue);
		}

		if (order === 'asc') {
			return aa - bb;
		}

		return bb - aa;
	});
};

export function makeServer({ environment = 'development' } = {}) {
	const server = createServer({
		environment,

		// -------------------------------------------------- Factories //
		factories: {
			comment: Factory.extend({
				name() {
					return faker.lorem.sentence({ max: 5, min: 3 });
				},
			}),

			post: Factory.extend({
				title() {
					return faker.lorem.sentence({ max: 5, min: 3 });
				},
			}),

			user: Factory.extend({
				email: faker.internet.email,
				name: faker.person.fullName,
				username: faker.internet.userName,
			})
		},

		// -------------------------------------------------- Models //
		models: {
			comment: Model.extend({
				post: belongsTo(),
				user: belongsTo(),
			}),
			post: Model.extend({
				comments: hasMany(),
				user: belongsTo(),
			}),
			user: Model.extend({
				posts: hasMany(),
			}),
		},

		// -------------------------------------------------- Routes //
		routes() {
			let namespace = 'vuetify-drilldown-table/api';

			if (this.environment === 'playground') {
				namespace = 'vuetify-drilldown-table/playground/api';
			}

			this.namespace = namespace;


			// ------------------------- Client Side //
			this.get('/users', (schema) => {
				return schema.users.all();
			});

			this.get('/users/:id/posts', (schema, request) => {
				const posts = schema.posts.where({ userId: request.params.id });

				return posts;
			});

			this.get('/posts/:id/comments', (schema, request) => {
				const comments = schema.comments.where({ postId: request.params.id });

				return comments;
			});


			// ------------------------- Server Side //
			// Users //
			this.post('/users', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc } = attrs;

				let users = schema.users.all();

				// Sort //
				const sortKey = sortBy[0]?.key;
				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					users = sortArray(users, sortKey, sortOrder);
				}

				// Query //
				if (query) {
					users = search(users, query, ['email', 'name', 'id']);
				}

				const start = page * limit - limit;
				const end = start + limit;
				const itemsLength = users.length;
				users = users.slice(start, end);

				return {
					pagination: {
						itemsLength,
						limit,
						page,
						postId,
						query,
						sortBy,
						sortDesc,
					},
					users: users?.models ?? users,
				};
			}, { timing: 750 });


			// Posts //
			this.post('/users/posts', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc, userId } = attrs;

				let posts = schema.posts.where({ userId });

				// Sort //
				const sortKey = sortBy[0]?.key;
				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					posts = sortArray(posts, sortKey, sortOrder);
				}

				// Query //
				if (query) {
					posts = search(posts, query, ['id', 'title']);
				}

				const start = page * limit - limit;
				const end = start + limit;
				const itemsLength = posts.models.length;
				posts = posts.slice(start, end);

				return {
					pagination: {
						itemsLength,
						limit,
						page,
						postId,
						query,
						sortBy,
						sortDesc,
					},
					posts: posts.models,
				};
			}, { timing: 750 });


			// Comments //
			this.post('/users/posts/comments', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc } = attrs;

				let comments = schema.comments.where({ postId });

				// Sort //
				const sortKey = sortBy[0]?.key;
				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					comments = sortArray(comments, sortKey, sortOrder);
				}

				// Query //
				if (query) {
					comments = search(comments, query, ['id', 'name']);
				}

				const start = page * limit - limit;
				const end = start + limit;
				const itemsLength = comments.models.length;
				comments = comments.slice(start, end);

				return {
					comments: comments.models,
					pagination: {
						itemsLength,
						limit,
						page,
						postId,
						query,
						sortBy,
						sortDesc,
					},
				};
			});

			this.passthrough('https://cdn.jsdelivr.net/gh/PrismJS/prism@1.29.0/themes/prism-tomorrow.css');
		},

		// -------------------------------------------------- Seeds //
		seeds(server) {
			server.db.loadData(database);
		},

		// -------------------------------------------------- Serializers //
		serializers: {
			application: RestSerializer,
			comment: Serializer.extend({
				include: ['post'],
			}),
			embed: true,
			post: Serializer.extend({
				include: ['user'],
			}),
			serializeIds: 'always',
		},
	});

	return server;
}
