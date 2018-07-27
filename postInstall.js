var fs = require('fs-extra');

fs.copySync('./node_modules/ui5lab-browser/dist//', './test/ui5lab/browser');

var fs = require('fs')
var sLibraryIndex = './test/ui5lab/browser/libraries.json';

var oPackage = require('./package.json');
var sNamespace = oPackage.ui5lab.namespace || "ui5lab.library";

fs.readFile(sLibraryIndex, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(/\[\r\n\t\]/m, '[\r\n\t\t"' + sNamespace + '"\r\n\t]');

	fs.writeFile(sLibraryIndex, result, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});
