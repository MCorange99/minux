const process = require("process")
class Program {
	static Run(...args){
		const command = args.shift()
		const osModules = args.shift()
		const pathManager = osModules.pathManager

		console.log(pathManager.current)
		console.log(args)
		console.log(process.cwd())

	}
}

//   /bin/echo hi