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
			this.namespace = 'vuetify-drilldown-table/playground/api';

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
			this.post('/users', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc } = attrs;

				let users = schema.users.all();
				const itemsLength = users.models.length;
				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					// TODO: Need to update this to sort strings as well //
					users = users.sort((a, b) => {
						if (sortOrder === 'asc') {
							return a.id - b.id;
						}
						return b.id - a.id;
					});
				}

				const start = page * limit - limit;
				const end = start + limit;
				users = users.slice(start, end);

				// query users.models
				// console.log({ query });
				// if (query) {
				// 	users = users.models.filter((user) => {
				// 		return (
				// 			user.name.toLowerCase().includes(query.toLowerCase()) ||
				// 			user.username.toLowerCase().includes(query.toLowerCase()) ||
				// 			user.email.toLowerCase().includes(query.toLowerCase())
				// 		);
				// 	});
				// }

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
			});

			this.post('/users/posts', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc, userId } = attrs;

				let posts = schema.posts.where({ userId });
				const itemsLength = posts.models.length;
				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					// TODO: Need to update this to sort strings as well //
					posts = posts.sort((a, b) => {
						if (sortOrder === 'asc') {
							return a.id - b.id;
						}
						return b.id - a.id;
					});
				}

				const start = page * limit - limit;
				const end = start + limit;
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
			});

			this.post('/users/posts/comments', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				const { limit, page, postId, query, sortBy, sortDesc } = attrs;

				let comments = schema.comments.where({ postId });
				const itemsLength = comments.models.length;

				const sortOrder = sortBy[0]?.order;

				if (sortOrder) {
					// TODO: Need to update this to sort strings as well //
					comments = comments.sort((a, b) => {
						if (sortOrder === 'asc') {
							return a.id - b.id;
						}
						return b.id - a.id;
					});
				}

				const start = page * limit - limit;
				const end = start + limit;
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
		},

		// -------------------------------------------------- Seeds //
		seeds(server) {
			// server.createList('user', 15).forEach((user) => {
			// 	server.createList('post', 15, { user }).forEach((post) => {
			// 		server.createList('comment', 5, { post });
			// 	});
			// });

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
