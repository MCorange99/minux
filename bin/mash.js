const System = require('#include/system.js');

//TODO: add support for typescript
module.exports = class Mash {
	constructor(pathManager){
		this.exit = false
		this.user = "MCorange"
		this.pathManager = pathManager
		this.shell = this.init()
	}
	loop(){
		const system = new System(this.pathManager)
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
	
	init(){
		while(true) {
			this.loop()
			if (this.exit) {
				console.log('Exiting!');
				break;
			}
		}
	}
	
}
