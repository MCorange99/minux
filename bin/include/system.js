const assert = require('assert');
const process = require('process');
const readline = require('readline-sync');
const fs = require('fs');//.promises
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { NodeVM } = require("vm2")

module.exports = class System {

	constructor(pathManager){
		this.pathManager = pathManager
	}

	static openFile(filePath, text, mode='w'){
		//fs.open(filePath, 'w');
		if (mode == 'c'){
			try {
				fs.writeFileSync(filePath, text)
			} catch (error) {
				console.error(`Got an error trying to write to a file: ${error.message}`);
			}
		} else
		if (mode == 'w'){
			try {
				fs.appendFileSync(filePath, text)
			} catch (error) {
				console.error(`Got an error trying to write to a file: ${error.message}`);
			}
		} else
		if (mode == 'r'){
			return fs.readFileSync(filePath, 'utf-8');
		}
	
	}
	
	static input(q){
		return readline.question(q);
	}
	
	static exit(code){
		process.exit(code);
	}
	
	runCmd(cmd, args) {
		// console.log(cmd + "\n" + args)
		// const vm = new NodeVM({
		// 	require: {
		// 		external: true,
		// 		root: this.pathManager.root,
		// 		sandbox: this.pathManager,
		// 		require: {
		// 			external: true,
		// 			builtin: ["*"]
		// 		}
		// 	}
		// });
		
		const file = fs.readFileSync(this.pathManager.getRealPath(cmd) + ".js", {encoding: "utf-8", flag: "r"});
		let str = `${file}\n\n Program.Run("${cmd}", {pathManager: this.pathManager}`
		
		for (const i in args){
			str += `,"${args[i]}"`
		}
		str += ");"
		// vm.run(str);
		eval(str)
	}
}