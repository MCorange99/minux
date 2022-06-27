const assert = require('assert');
const process = require('process');
const readline = require('readline-sync');
const fs = require('fs');//.promises
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Kernel = require("#kernel/Kernel.js")


module.exports = class System {
	/**
     * @param {Kernel} kernel 
     */
	constructor(kernel){
		this.kernel = kernel
		console.log(kernel)
	}
	openFile(filePath, text, mode='w'){
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
	
	input(q){
		return readline.question(q);
	}
	
	exit(code){
		process.exit(code);
	}
	
	runCmd(cmd) {
		// const vm = new NodeVM({
		// 	require: {
		// 		external: true,
		// 		root: 
		// 	}
		// });
	
		// vm.run();
		console.log(this.shell.kernel.pathManager.current)
	}
}



// console.log(input("hey"))