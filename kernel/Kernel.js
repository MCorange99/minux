#!/usr/bin/env node
const config = require('#etc/kernel/config.json');
// const { openFile, exit, input, runCmd } = require('#include/system.js')
const { PathParser } = require("#include/path.js")
// const fs = require('fs');
console.log("imported")

module.exports = class Kernel {
	constructor(){
		this.pathManager = new PathParser(config.fs.rootDirectory, "/")
		const Shell = require(this.pathManager.getRealPath("/bin") + "/" + config.boot.shell)
		this.shell = new Shell(this.pathManager)
		this.pathManager.setManger()
	}
}
