export function useSlugifyString(string = false, divider = '-') {
	if (divider !== '_' && divider !== '-') {
		throw new Error('[slugifyStringHelper]: Divider must be either "_" or "-"');
	}

	const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/-,:;';
	const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
	const p = new RegExp(a.split('').join('|'), 'g');

	let response = string.toString().toLowerCase()
		// Replace spaces with divider //
		.replace(/\s+/g, divider)
		.replace(p, (c) => b.charAt(a.indexOf(c)))
		.replace(/&/g, `${divider}and${divider}`)
		.replace(/[^\w-]+/g, '');

	if (divider === '_') {
		response = response.replace(/-+/g, '_')
			.replace(/__+/g, '_')
			.replace(/^_/, '')
			.replace(/^-+/, '')
			.replace(/-+$/, '');
	}

	if (divider === '-') {
		response = response.replace(/_+/g, '-')
			.replace(/--+/g, '-')
			.replace(/^-/, '')
			.replace(/^_+/, '')
			.replace(/_+$/, '');
	}

	return response;
}
