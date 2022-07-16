const assert = require('assert');
const process = require('process');
const readline = require('readline-sync');
const fs = require('fs');//.promises
const util = require('util');

module.exports = class System {
	/**
	 * 
	 * @param {object} kernelModules - An object that has all the essential kernel modules
	 */
	constructor(kernelModules){
		this.kernelModules = kernelModules
	}
	/**
	 * 
	 * @param {String} filePath - Path to the file ex: ./myfile.txt
	 * @param {String} text - The text to write/append to the file. Unused when using 'r' flag 
	 * @param {String} flag - The flag, can be 'r' (read),'w' (write),'a' (append)
	 * @returns content if flag is 'r'
	 */
	static openFile(filePath, text, flag='r'){
		if (flag == 'c'){
			try {
				fs.writeFileSync(filePath, text)
			} catch (error) {
				console.error(`Got an error trying to append to a file: ${error.message}`);
			}
		} else
		if (flag == 'w'){
			try {
				fs.appendFileSync(filePath, text)
			} catch (error) {
				console.error(`Got an error trying to write to a file: ${error.message}`);
			}
		} else
		if (flag == 'r'){
			return fs.readFileSync(filePath, 'utf-8');
		}
	
	}
	/**
	 * 
	 * @param {String} question
	 * @returns User input.
	 */
	static input(question){
		return readline.question(question);
	}
	/**
	 * Exit the whole system
	 * @param {Number} code 
	 */
	static exit(code){
		process.exit(code);
	}
	/**
	 * Runs the provided executable
	 * @param {String} path 
	 * @param {Array<String>} args 
	 * @param {object} kernelModules 
	 */
	runCmd(path, args, kernelModules=null) {
		args = args.unshift(path)
		// const file = fs.readFileSync(this.pathManager.getRealPath(cmd) + ".js", {encoding: "utf-8", flag: "r"});
		// let str = `${file}\n\n Program.Run("${cmd}", {pathManager: this.pathManager}`
		
		// for (const i in args){
		// 	str += `,"${args[i]}"`
		// }
		// str += ");"
		// // vm.run(str);
		// eval(str)

		const ran = require(this.kernelModules.pathManager)
		ran.Run(args.length, args, kernelModules)

	}
}