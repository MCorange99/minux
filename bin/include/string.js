function parsePath(filePath, noEndSlash){
	let fileName, path, baseName;
	if (filePath.includes('/')){
		let fileNameTmp = filePath.split('/');
		let pathTmp = fileNameTmp;
		fileName = pathTmp.pop();
		baseName = fileName.split('.')[0];
		path = pathTmp.join('/');
	} else {
		baseName = filePath.split('.')[0];
		fileName = filePath;
		path = '.';
	}
	if (noEndSlash) return [fileName, path, baseName];

	return [fileName, path + '/', baseName];
}

module.exports = {
	parsePath
};