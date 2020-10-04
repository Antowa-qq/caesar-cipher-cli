# Caesar cipher CLI tool

CLI Tool to encode and decode text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

# Install


```$ git clone https://github.com/Antowa-qq/caesar-cipher-cli.git```

```$ cd caesar-cipher-cli/caesar-cipher-cli```

```$ npm install```


# Options 

CLI tool accept 4 options:

**1. -a, --action [type]** — an action encode/decode **(required)**

**2. -s, --shift [number]** — a shift **(required)** 

**3. -i, --input [filename]** — an input file 

**4. -o, --output [filename]** — an output file

# Usage example:

```$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"```

```$ node index.js --action encode --shift 7 --input plain.txt --output encoded.txt```

```$ node index.js --action decode --shift 7 --input decoded.txt --output plain.txt```

```$ node index.js --action encode --shift 7```

# Good luck ! :heart: :fist: :v:
