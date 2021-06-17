declare namespace fbrute {
	
	function bruteForce(alphabet: string, l: number, cb: (str: string[]) => undefined): undefined;
	function bruteForceWithStop(alphabet: string, l: number, cb: (str: string[]) => boolean | undefined): undefined;
	function bruteForceWithAsyncStop(alphabet: string, l: number, cb: (str: string[]) => boolean | undefined): undefined;
	
	function multiBruteForce(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => undefined): undefined;
	function multiBruteForceWithStop(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => boolean | undefined, returnEverything: boolean): boolean | boolean[];
	function multiBruteForceWithAsyncStop(longToShorter: boolean, alphabet: string, l: number, cb: (str: string[]) => boolean | undefined, returnEverything: boolean): boolean | boolean[];
	
}

export = fbrute;