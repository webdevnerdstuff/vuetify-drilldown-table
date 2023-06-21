/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Debugging Log Helper
 */
export function useLogHelper(options) {
	const { borderColor, filename, method, values } = options;

	const logColors = [
		'background: black',
		`border: 3px dashed ${borderColor}`,
		`border-radius: 5px`,
		`color: white`,
		'font-family: monospace',
		'font-size: 1.2em',
		'padding: 10px',
		'margin: 5px 0'
	];

	// File name + method //
	const output = [
		'%c%s',
		logColors.join(';'),
		`${filename} - ${method}:`,
	];

	// Values to log //
	Object.values(values).forEach((obj: any) => {
		const { key, val } = obj;

		const value = unref(val);
		const booleanValue = value || value === true ? true : false;
		const valueColor = booleanValue ? 'lime' : 'red';

		output[0] = output[0] + `%c%s%c%s`;

		output.push(
			`color: white`,
			`\t${key} = `,
			`color: ${valueColor}`,
			`${value}`,
		);
	});

	console.log(...output);
};
