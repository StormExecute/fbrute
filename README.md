# fbrute (fast-bruteforce) [![NPM version][npm-image]][npm-url]

Fast generator of character combinations for a given alphabet and length.

# Description

In fact, this generator iterates over all possible character combinations using the capabilities of the lowest level of the language to achieve improved performance.

# Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Performance benchmark](#benchmark)
* [API](#api)
* [Contacts](#contacts)

<div id='install'></div>

# Install

```bash
$ npm install fbrute
```

<div id='usage'></div>

# Usage

```javascript

const fBrute = require("fbrute");

fBrute.bruteForce("abcd", 4, str => console.log(str.join("")));

```

<div id='benchmark'></div>

# Performance benchmark

```bash

bruteforce x 6,968 ops/sec +1.01% (81 runs sampled)
bruteforcejs x 18,764 ops/sec +0.89% (84 runs sampled)
node-bruteforce x 18,966 ops/sec +1.40% (86 runs sampled)
bruteforcer x 79,761 ops/sec +6.37% (72 runs sampled)
brutee x 14,057 ops/sec +0.89% (90 runs sampled)
bruter x 22,928 ops/sec +2.17% (85 runs sampled)
fBrute x 99,161 ops/sec +1.19% (85 runs sampled)

Fastest is fBrute

```

To run benchmark:

```bash
npm run benchmark
```

<div id='api'></div>

# API

Types: [HERE!](https://github.com/StormExecute/fbrute/blob/master/index.d.ts)

### fBrute.bruteForce(alphabet: string, l: number, cb: (str: string[]) => undefined) => undefined
The main function that starts brute-force

### fBrute.bruteForceWithStop(alphabet: string, l: number, cb: (str: string[]) => boolean | undefined) => undefined
The same as bruteForce, only it can stop if the callback returns true

### fBrute.bruteForceWithAsyncStop(alphabet: string, l: number, cb: (str: string[]) => boolean | undefined) => undefined
Same as bruteForceWithStop only with asynchronous support

### fBrute.multiBruteForce(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => undefined) => undefined
Launches fBrute.bruteForce at all possible lengths

### fBrute.multiBruteForceWithStop(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => boolean | undefined, returnEverything: boolean) => boolean | boolean[]
The same as multiBruteForce, only it can stop if the callback returns true

### fBrute.multiBruteForceWithAsyncStop(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => boolean | undefined, returnEverything: boolean) => boolean | boolean[]
Same as multiBruteForceWithStop only with asynchronous support

<div id='contacts'></div>

# Contacts

**Yandex Mail** - vladimirvsevolodovi@yandex.ru

**Github** - https://github.com/StormExecute/

# Platforms

**Github** - https://github.com/StormExecute/fbrute/

**NPM** - https://www.npmjs.com/package/fbrute/

# License

**MIT** - https://mit-license.org/

[npm-url]: https://www.npmjs.com/package/fbrute
[npm-image]: https://img.shields.io/npm/v/fbrute.svg