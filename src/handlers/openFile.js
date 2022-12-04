// const Markdown = require('markdown-it');
const {dialog} = require('electron');
const mime = require('mime-types');
const path = require('path');
const fs = require('fs');

const markdown = require('markdown-it')();

let openFile = async (event, configPath) => {
	let fileToOpen = await dialog.showOpenDialog({properties: ["openFile"]});

	if (fileToOpen.canceled)
		return;

	let filePath = fileToOpen.filePaths[0];
	let fileName = filePath.split(path.sep).slice(-1)[0];
	let recentPath = path.join(configPath, 'recent.json');

	let fileExt = fileName.split(".").slice(-1)[0].toLowerCase() == 'md';
	let fileMimeType = mime.lookup(filePath) == 'text/markdown';

	let recent = require(recentPath);

	if (!fileExt && !fileMimeType) {
		return await dialog.showErrorBox("Invalid file", "File, what you want to open not a md file");
	}

	let data = fs.readFileSync(filePath);

	let markdownRendered = markdown.render(data.toString());

	let recentOpenedFileData = {
		name: fileName,
		path: filePath
	}

	let recentFileExists = recent.recent.filter(e => e.path == filePath);

	if (Object.keys(recentFileExists).length == Object.keys([]).length) {
		recent.recent.push(recentOpenedFileData);

		fs.writeFileSync(recentPath, JSON.stringify(recent), 'utf-8');
	}

	return {
		fileName: fileName,
		fileData: markdownRendered,
		fileDataRow: data.toString()
	};

}

module.exports = {
	openFile: openFile
}