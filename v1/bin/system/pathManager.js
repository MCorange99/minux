
class PathManager {
	/**
	 * Path Manager for minux
	 * @param {string} rootPath - The real root path of the filesystem
	 * @param {string} currentPath - the current path of the fake system
	 * @param {boolean} protectedMode - Protected mode disallows escaping the fake filesystem
	 */
	constructor(rootPath, currentPath = "/", protectedMode = true){
		this.kernelModules = null
		this.root = rootPath
		this.current = currentPath
		this.protected = protectedMode
	}
	/**
	 * Initialise the Path manager with the other essential kernel modules.
	 * @param {object} kernelModules - The essential modules of the kernel for minux. 
	 */
	init(kernelModules){
		this.kernelModules = kernelModules
	}
	/**
	 * Gets the real path of the fake path.
	 * @param {String} path - The path to get the real path of the fake filesystem. 
	 * @returns 
	 */
	getRealPath(path){
		let fullpath = []
		
		if (path[0] === "/") {
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
	/**
	 * Sets the path in the fake filesystem
	 * @param {String} path - The new path
	 */
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
	PathManager
}