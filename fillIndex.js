var fs = require('fs-extra');

var oPackage = require('./package.json');
var sNamespace = oPackage.ui5lab.namespace || "ui5lab.library";

// fill library index with data from package.json
var sLibraryIndex = './test/' + sNamespace.replace("\.", "/") + '/index.json';
fs.readFile('./index.json', 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}

	// fill fields
	data = data.replace(/{{namespace}}/g, sNamespace);
	data = data.replace(/{{icon}}/g, oPackage.ui5lab.icon);
	data = data.replace(/{{displayName}}/g, oPackage.ui5lab.displayName || oPackage.name);
	data = data.replace(/{{description}}/g, oPackage.description);
	data = data.replace(/{{license}}/g, oPackage.license.replace("-", " "));
	data = data.replace(/{{version}}/g, oPackage.version);
	data = data.replace(/{{source}}/g, oPackage.repository.url.replace("\.git", ""));
	data = data.replace(/{{demo}}/g, oPackage.homepage);
	data = data.replace(/{{documentation}}/g, oPackage.ui5lab.documentation || oPackage.repository.url.replace("\.git", "") + "/blob/master/README.md");

	// write into namespace folder where the browser expects it
	fs.writeFile(sLibraryIndex, data, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});
