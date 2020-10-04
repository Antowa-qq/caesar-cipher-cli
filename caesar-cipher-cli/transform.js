import { Transform } from 'stream';
import { encode, decode } from './caesar.js';

export default class CaesarCipherTransform extends Transform {
	constructor({ shift, action }) {
		super();
		this.shift = shift;
		this.action = action;
		this.encode = encode;
		this.decode = decode;
	}
	_transform(data, encoding, callback) {
		this.push(this[this.action](data.toString(), +this.shift));
		callback();
	}
}