const path = require("path");
const fs = require("fs");

let readRecentFiles = async () => {
	let pathToConfig = path.join(__dirname, "../../config/");
	let recentPath = path.join(pathToConfig, "recent.json");

	let recentFileExist = fs.existsSync(recentPath);

	if (!recentFileExist) {
		fs.writeFileSync(recentPath, `{"recent": []}`, 'utf-8');
	}

	const recent = require(recentPath);

	if (Object.keys(recent.recent).length == Object.keys([]).length)
		return 'Nothing to show';

	return recent.recent;


}

module.exports = {
	readRecent: readRecentFiles
}


