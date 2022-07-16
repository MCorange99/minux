const System = require('#include/system.js');
const config = require('#etc/mash/config.json')
const Kernel = require('#kernel/kernel.js')
const fs = require('fs')

//TODO: add support for typescript
module.exports = class Mash {
	/**
	 * The official shell for minux
	 */
	constructor(){
		this.exit = false
		this.user = "MCorange"
		this.kernelModules = null
		this.shell = this.init()
	}
	/**
	 * Start the loop for user input
	 * @param {object} kernelModules - The essential modules of the kernel for minux.
	 */
	init(kernelModules){
		this.kernelModules = kernelModules;
		if(kernelModules == null) console.log(":{")

		while(true) {
			this.loop()
			if (this.exit) {
				console.log('Exiting!');
				break;
			}
		}
	}
	/**
	 * Searches the path variable for executables
	 * @param {String} exec - The executab;e to search for in the path variable
	 */
	searchPath(exec){
		const paths = config.path.split(":")
		for (const i in paths){

		}
	}
	/**
	 * Loop function thats called in a while loop
	 * @returns null
	 */
	loop(){
		const system = new System(this.kernelModules)
		let inp = System.input(`${this.user}@local$`);
		if (inp == "exit" || inp == "quit") {
			exit = true
			return
		}
		if (inp == "") return
		let inpa = inp.split(" ")
		const execName = inpa[0]
		inpa.shift()
		const args = inpa;
		system.runCmd(execName, args)
	
	}
	
}
