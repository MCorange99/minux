
class PathParser {

	constructor(rootPath, currentPath = "/", protectedMode = true){
		this.root = rootPath
		this.current = currentPath
		this.protected = protectedMode
	}

	getRealPath(path){
		let fullpath = []
		
		if (path[0] === "/") {
			console.log("true")
			fullpath = this.root.split("/")
			path = path.substring(1)
		} else {
			fullpath = (this.root + this.current).split("/")
		}
		let patha = path.split("/")
		
		

		for (const i in patha){
			if (patha[i] === "..") {
				if (this.protected && fullpath.join("/") === this.root) {
					continue
				}
				fullpath.pop()
			} else
			if (patha[i] === "." ) {
				continue
			} else {
				fullpath.push(patha[i])
			}
		}
		return fullpath.join("/")
	}

	// get root(){
	// 	return this.root
	// }

	// set root(value) {
    //     throw new Error('root is immutable.');
    // }

	setPath(path){
		let fullpath = []
		
		if (path[0] === "/") {
			fullpath = "/".split("/");
		} else {
			fullpath = this.current.split("/")
		}
		let patha = path.split("/")
		
		

		for (const i in patha){
			if (patha[i] === "..") {
				if (this.protected && fullpath.join("/") === this.root) continue
				if (fullpath.length == 1 && path[0] == "/") continue
				fullpath.pop()
			} else
			if (patha[i] === "." ) {
				continue
			} else {
				fullpath.push(patha[i])
			}
		}
		this.current = fullpath.join("/")
	}
}

module.exports = {
	PathParser
}