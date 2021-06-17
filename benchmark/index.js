const Benchmark = require('benchmark');
const package = require("./package.json");

function go(options) {
	
	console.log();

	const suite = new Benchmark.Suite;
	
	for(let i = 0; i < options.fns.length; i++) {
		
		suite.add(options.names[i] || "test-" + Math.random(), options.fns[i]);
		
	}
	
	suite
		.on("error", function(event) {
			
			console.error(event.target.error);
			
		})
		.on('cycle', function(event) {
			
			if(!event.target.error) console.log(String(event.target));
		  
		})
		.on("complete", function() {
			
			console.log('\nFastest is ' + this.filter('fastest').map('name'));
			
		})
		.run({"async": true});
	
}

const equalPackagesNames = Object.keys(package.devDependencies).slice(1);

go({
	
	names: equalPackagesNames.concat(["fBrute"]),
	fns: [
	
		function() {
	
			const bf = require('bruteforce');
	 
			bf({
				len: 4,
				chars: ['a', 'b', 'c', 'd'],
				step: str => {}
			});
			
		},
		
		function() {
			
			const bruteforce = require("bruteforcejs");
			
			bruteforce("abcd", result => {
				
				if(result == "dddd") return true;
				
			});
			
		},
		
		function() {
			
			const bruteForce = require("node-bruteforce");

			bruteForce(["a", "b", "c", "d"], result => {
				
				if(result == "dddd") return true;
				
			});
			
		},
		
		function() {
			
			const Bruteforcer = require('bruteforcer');
 
			const bf = new Bruteforcer({
				chars: 'ab',
				min: 1,
				max: 2,
				cbk: str => {

					if(str == "bb") {
						
						bf.stop();
						return true;

					} else {
						
						return false;
						
					}

				}
			});
			 
			bf.start();
			
		},
		
		function() {
			
			const brutee = require('brutee');
			for (let i = 0; i < 340; i++) {
				brutee('abcd', i);
			}
			
		},
		
		function() {
			
			const bruteForce = require('bruter');

			const generator = bruteForce({ alphabet: "abcd" });

			while(true) {
				
				const chars = generator.next().value;

				if (chars === 'dddd') break;
				
			}
			
		},
		
		function() {
			
			const fBrute = require("../src");
			
			fBrute.multiBruteForce(false, "abcd", 4, str => {});
			
		},
	
	],
	
});