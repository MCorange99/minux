const System = require('#include/System.js');
const Kernel = require("#kernel/Kernel.js")
const system = new System()
//TODO: add support for typescript

module.exports = class Mash {
	// /**
    //  * The kernel of the fake os
    //  * @param {Kernel} kernel 
    //  */
	constructor(){
		this.kernel = Kernel
		this.shell = this.init()
		this.exit = false
		this.user = "MCorange"
	}

	loop(){
		let inp = system.input(">");
		if (inp == "exit" || inp == "quit") {
			this.exit = true
			return
		}
		let inpa = inp.split(" ")
		const execName = inpa[0]
		inp.shift()
		const args = inpa;
		system.runCmd(execName, args)
	
	}
	init(){
		console.log("Started mash")
		while(true) {
			this.loop()
			if (this.exit) {
				console.log('Exiting!');
				break;
			}
		}
	}
	
}

