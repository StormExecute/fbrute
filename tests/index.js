const {

	bruteForce,
	multiBruteForce,
	
	bruteForceWithStop,
	multiBruteForceWithStop,

} = require("../src");

const tests = require("./testsArgs");
const results = require("./results");

const checkArrIdentify = require("./checkArrIdentify");

const {
	
	redLog,
	blueLog,
	
	passTest,
	throwTest,
	
} = require("./logs");

for(let i = 0; i < tests.length; ++i) {

	const test = tests[i];
	const result = results[i];
	
	const tempResults = [];
	
	if((i + 1) % 2 != 0) {
		
		const fnTest = i == 2 ? (...args) => multiBruteForce(0, ...args) : bruteForce;

		fnTest(test[0], test[1], str => {
			
			tempResults.push( str.join("") );
			
		});
	
	} else {
		
		let nowResultPointer = 1;
		
		const fnTest = i == 3 ? (...args) => multiBruteForceWithStop(1, ...args) : bruteForceWithStop;
		
		const wasStopped = !fnTest(test[0], test[1], str => {
			
			tempResults.push( str.join("") );
			
			if(nowResultPointer == result.length) {
				
				return true // as callStop
				
			}
			
			++nowResultPointer;
			
		});
		
		if(!wasStopped) {
			
			throwTest(i);
			continue;
			
		}
		
	}
	
	if(checkArrIdentify(result, tempResults)) {
	
		passTest(i);
		
	} else {
		
		throwTest(i);
		
	}
	
}