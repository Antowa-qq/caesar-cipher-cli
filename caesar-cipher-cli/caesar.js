const encode = (text, shift) => {
	return encryption(text, shift)
}

const decode = (text, shift) => {
	return encryption(text, -shift);
}

const encryption = (text, shift) => {
	return text.split('').map((letter) => {
		if (letter.match(/[a-zA-Z]/)) {
			const temp = letter.charCodeAt() >= 97 ? 97 : 65;
			return String.fromCharCode(((letter.charCodeAt() + 26 - temp + shift) % 26) + temp);
		}
		return letter;
	}).join('');
}

export {
	encode,
	decode
}