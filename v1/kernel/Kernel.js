#!/usr/bin/env node
const config = require('#etc/kernel/config.json');
const { PathManager } = require("#system/pathManager.js")

module.exports = class Kernel {
	constructor(){
		this.pathManager = new PathManager(config.fs.rootDirectory, "/")
		this.fileSystemManager = null // TBD
		this.userManager = null // TBD
		this.processManager = null // TBD
		// putting them in an object so code is cleaner

		this.kernelModules = {
			pathManager: this.pathManager, // might get integrated into fileSystemManager
			fileSystemManager: this.fileSystemManager,
			userManager: this.userManager,
			processManager: this.processManager
		}

		// need to access these somehow, so we initialise them with the kernel modules object
		this.pathManager.init(this.kernelModules)
		// this.fileSystemManager.init(this.kernelModules)
		// this.userManager.init(this.kernelModules)
		// this.processManager.init(this.kernelModules)

		// init shell
		const Shell = require(this.kernelModules.pathManager.getRealPath("/bin") + "/" + config.boot.shell)
		this.shell = new Shell()
		this.shell.init(this.kernelModules)
		if(this.kernelModules == null) console.log(":{")
	}
}
