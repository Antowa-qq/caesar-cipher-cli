import fs from 'fs';

const validateArgs = ({ shift, action, input, output }) => {
	if (action === undefined) {
		process.stderr.write('missing action');
		process.exit(1);
	}

	if (shift === undefined) {
		process.stderr.write('missing shift');
		process.exit(1);
	}

	if (action !== 'encode' && action !== 'decode') {
		process.stderr.write('invalid action, action must be a encode or decode.');
		process.exit(1);
	}

	if (!Number(shift).toFixed(0).match(/^[0-9]+$/)) {
		process.stderr.write('invalid shift , shift must be a positive integer.');
		process.exit(1);
	}
	if (input) {
		if (!fs.existsSync(input)) {
			process.stderr.write(`file ${input} does not exist.`);
			process.exit(1);
		}
	}

	if (output) {
		if (!fs.existsSync(output)) {
			process.stderr.write(`file ${output} does not exist.`);
			process.exit(1);
		}
	}
}

export { validateArgs }