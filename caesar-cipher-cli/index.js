import program from 'commander';
import { validateArgs } from './utils.js';
import CaesarCipherTransform from './transform.js';
import fs from 'fs';

program
	.storeOptionsAsProperties(false)
	.passCommandToAction(false);


program
	.requiredOption('-s, --shift <number>', 'a shift')
	.requiredOption('-a, --action <type>', 'an action encode/decode')
	.option('-i, --input <filename>', 'an input file')
	.option('-o, --output <filename>', 'an output file')
	.parse(process.argv);

validateArgs(program.opts());


const { action, shift, input, output } = program.opts();

const readStream = input ? fs.createReadStream(input).on(('error'), () => {
	process.stderr.write('Unable to read file');
	process.exit(1);
}) : process.stdin;

const transform = new CaesarCipherTransform({ shift, action });

const writeStream = output ? fs.createWriteStream(output, { flags: 'a' }).on(('error'), () => {
	process.stderr.write('Unable to write to file');
	process.exit(1);
}) : process.stdout;

readStream.pipe(transform).pipe(writeStream);
