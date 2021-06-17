module.exports = {};

module.exports.bruteForce = (alphabet, l, cb) => {
	
	const result = [];
	
	for(let i = 0; i < l; ++i) {
		
		result[i] = alphabet[0];
		
	}
	
	cb(result);
	
	const endResultL = result.length - 1;
	const endAlphaBetL = alphabet.length - 1;
	
	let nowLastCharIndex = 0, nowPointer = endResultL, max = alphabet.length ** l;
	
	while(--max) {
		
		if(nowLastCharIndex >= endAlphaBetL) {
			
			//nowLastCharIndex as a temp while condition
			
			while(nowLastCharIndex) {
				
				--nowPointer;
				
				let nowCharIndex = -1;
				
				//using low-level index search instead of .indexOf
				
				for(let i = 0; i < alphabet.length; ++i) {
					
					if(alphabet[i] == result[nowPointer]) {
						
						nowCharIndex = i;
						
					}
					
				}
				
				if(endAlphaBetL > nowCharIndex) {
					
					result[nowPointer] = alphabet[nowCharIndex + 1];
				
					while(++nowPointer < result.length) {
						
						result[nowPointer] = alphabet[0];
						
					}
					
					cb(result);
					
					nowLastCharIndex = 0, nowPointer = endResultL;
					
				}
				
			}
			
		} else {
			
			//more speed due to a separate section for fast processing of iterating over the last characters
			
			result[nowPointer] = alphabet[++nowLastCharIndex];
			cb(result);
			
		}
		
	}
	
};

module.exports.multiBruteForce = (longToShorter, alphabet, l, cb) => {
	
	if(longToShorter) {
	
		for(let i = l; i > 0; --i) {
			
			module.exports.bruteForce(alphabet, i, cb);
			
		}
		
	} else {
		
		for(let i = 1; i <= l; ++i) {
			
			module.exports.bruteForce(alphabet, i, cb);
			
		}
		
	}
	
};

module.exports.bruteForceWithStop = (alphabet, l, cb) => {
	
	const result = [];
	
	for(let i = 0; i < l; ++i) {
		
		result[i] = alphabet[0];
		
	}
	
	if(cb(result)) {

		return false;
	
	}
	
	const endResultL = result.length - 1;
	const endAlphaBetL = alphabet.length - 1;
	
	let nowLastCharIndex = 0, nowPointer = endResultL, max = alphabet.length ** l;
	
	while(--max) {
		
		if(nowLastCharIndex >= endAlphaBetL) {
			
			while(nowLastCharIndex) {
				
				--nowPointer;
				
				let nowCharIndex = -1;
				
				for(let i = 0; i < alphabet.length; ++i) {
					
					if(alphabet[i] == result[nowPointer]) {
						
						nowCharIndex = i;
						
					}
					
				}
				
				if(endAlphaBetL > nowCharIndex) {
					
					result[nowPointer] = alphabet[nowCharIndex + 1];
				
					while(++nowPointer < result.length) {
						
						result[nowPointer] = alphabet[0];
						
					}
					
					if(cb(result)) {

						return false;
					
					}
					
					nowLastCharIndex = 0, nowPointer = endResultL;
					
				}
				
			}
			
		} else {
			
			result[nowPointer] = alphabet[++nowLastCharIndex];
			
			if(cb(result)) {

				return false;
			
			}
			
		}
		
	}
	
	return true;
	
};

module.exports.multiBruteForceWithStop = (longToShorter, alphabet, l, cb, returnEverything) => {
	
	let result = !returnEverything ? true : [];
	
	if(longToShorter) {
	
		for(let i = l; i > 0; --i) {
			
			if(!module.exports.bruteForceWithStop(alphabet, i, cb)) {
				
				if(!returnEverything) {
					
					result = false;
					
				} else {
					
					result.push(false);
					
				}
				
			} else if(returnEverything) {
				
				result.push(true);
				
			}
			
		}
		
	} else {
		
		for(let i = 1; i <= l; ++i) {
			
			if(!module.exports.bruteForceWithStop(alphabet, i, cb)) {
				
				if(!returnEverything) {
					
					result = false;
					
				} else {
					
					result.push(false);
					
				}
				
			} else if(returnEverything) {
				
				result.push(true);
				
			}
			
		}
		
	}
	
	return result;
	
};

module.exports.bruteForceWithAsyncStop = async (alphabet, l, cb) => {
	
	const result = [];
	
	for(let i = 0; i < l; ++i) {
		
		result[i] = alphabet[0];
		
	}
	
	if(await cb(result)) {

		return false;
	
	}
	
	const endResultL = result.length - 1;
	const endAlphaBetL = alphabet.length - 1;
	
	let nowLastCharIndex = 0, nowPointer = endResultL, max = alphabet.length ** l;
	
	while(--max) {
		
		if(nowLastCharIndex >= endAlphaBetL) {
			
			while(nowLastCharIndex) {
				
				--nowPointer;
				
				let nowCharIndex = -1;
				
				for(let i = 0; i < alphabet.length; ++i) {
					
					if(alphabet[i] == result[nowPointer]) {
						
						nowCharIndex = i;
						
					}
					
				}
				
				if(endAlphaBetL > nowCharIndex) {
					
					result[nowPointer] = alphabet[nowCharIndex + 1];
				
					while(++nowPointer < result.length) {
						
						result[nowPointer] = alphabet[0];
						
					}
					
					if(await cb(result)) {

						return false;
					
					}
					
					nowLastCharIndex = 0, nowPointer = endResultL;
					
				}
				
			}
			
		} else {
			
			result[nowPointer] = alphabet[++nowLastCharIndex];
			
			if(await cb(result)) {

				return false;
			
			}
			
		}
		
	}
	
	return true;
	
};

module.exports.multiBruteForceWithAsyncStop = async (longToShorter, alphabet, l, cb, returnEverything) => {
	
	let result = !returnEverything ? true : [];
	
	if(longToShorter) {
	
		for(let i = l; i > 0; --i) {
			
			if(!await module.exports.bruteForceWithAsyncStop(alphabet, i, cb)) {
				
				if(!returnEverything) {
					
					result = false;
					
				} else {
					
					result.push(false);
					
				}
				
			} else if(returnEverything) {
				
				result.push(true);
				
			}
			
		}
		
	} else {
		
		for(let i = 1; i <= l; ++i) {
			
			if(!await module.exports.bruteForceWithAsyncStop(alphabet, i, cb)) {
				
				if(!returnEverything) {
					
					result = false;
					
				} else {
					
					result.push(false);
					
				}
				
			} else if(returnEverything) {
				
				result.push(true);
				
			}
			
		}
		
	}
	
	return result;
	
};