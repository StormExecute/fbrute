const log = colorPrefix => message => console.log(colorPrefix + "%s\x1b[0m", message);

module.exports = {
	
	redLog: log("\x1b[31m"),
	blueLog: log("\x1b[34m"),
	
};

module.exports.passTest = i => module.exports.blueLog("test #" + (i + 1) + ": COMPLETED SUCCESSFULLY!");
module.exports.throwTest = i => module.exports.redLog("test #" + (i + 1) + ": FAILED!");