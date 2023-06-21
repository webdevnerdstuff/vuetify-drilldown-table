/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * ? Vuetify Helpers
 * ? Credits:
 * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts
 * http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
 *
 */


export function getNestedValue(obj: object, path: any, fallback = '') {
	let newObj = obj;
	const last = path.length - 1;

	if (last < 0) {
		return newObj === undefined ? fallback : newObj;
	}

	for (let i = 0; i < last; i++) {
		if (newObj == null) {
			return fallback;
		}

		newObj = newObj[path[i]];
	}

	if (newObj == null) {
		return fallback;
	}

	return newObj[path[last]] === undefined ? fallback : newObj[path[last]];
}

export function getObjectValueByPath(obj: object, path: string, fallback = '') {
	let newPath = path;

	if (obj == null || !newPath || typeof newPath !== 'string') {
		return fallback;
	}

	if (obj[newPath] !== undefined) {
		return obj[newPath];
	}

	newPath = newPath.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	newPath = newPath.replace(/^\./, ''); // strip a leading dot

	return getNestedValue(obj, newPath.split('.'), fallback);
}

export function useGetPropertyFromItem(item: any, property: any, fallback = '') {
	if (property == null) {
		return item === undefined ? fallback : item;
	}

	if (item !== Object(item)) {
		if (typeof property !== 'function') {
			return fallback;
		}

		const value = property(item, fallback);

		return typeof value === 'undefined' ? fallback : value;
	}

	if (typeof property === 'string') {
		return getObjectValueByPath(item, property, fallback);
	}

	if (Array.isArray(property)) {
		return getNestedValue(item, property, fallback);
	}

	if (typeof property !== 'function') {
		return fallback;
	}

	const value = property(item, fallback);

	return typeof value === 'undefined' ? fallback : value;
}
