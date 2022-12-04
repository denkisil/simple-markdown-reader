const path = require("path");
const fs = require("fs");
 
let clearRecentFiles = async (event, configPath) => {
	let recentPath = path.join(configPath, 'recent.json');

	let recentExists = fs.existsSync(recentPath);

	if (!recentExists)
		return;

	fs.writeFileSync(recentPath, '{"recent": []}');
}

module.exports = {
	clearRecentFiles: clearRecentFiles
}