const {clearRecentFiles} = require("./clearRecentList")
const {openRecentFile} = require("./openRecentFile");
const {readRecent} = require("./readRecentFiles");
const {openFile} = require("./openFile");

module.exports = {
	clearRecentList: clearRecentFiles,
	openRecentFile: openRecentFile,
	readRecent: readRecent,
	openFile: openFile
}