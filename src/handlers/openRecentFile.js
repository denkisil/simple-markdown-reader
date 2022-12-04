// const Markdown = require('markdown-it');
const {dialog} = require('electron');
const path = require('path');
const fs = require('fs');

const markdown = require('markdown-it')();

let openRecentFile = async (event, recent) => {
	let fileExists = fs.existsSync(recent.pathToRecent);

	if (!fileExists)
		return await dialog.showErrorBox('File not exists', 'File on this path not exists');

	let data = fs.readFileSync(recent.pathToRecent);

	let markdownRendered = markdown.render(data.toString());

	return {
		fileName: recent.name,
		fileData: markdownRendered,
		fileDataRow: data.toString()
	}
}

module.exports = {
	openRecentFile: openRecentFile
}