const {app, BrowserWindow, ipcMain, Menu} = require("electron");
const path = require("path");

const {clearRecentList ,openRecentFile, readRecent, openFile} = require("./handlers/");
const {appMenu} = require("./ui/");

let mainWin = async () => {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		title: "Simple Markdown Reader",
		icon: path.join(__dirname, "../icons/icon.png"),
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	// Menu.setApplicationMenu(appMenu);
	ipcMain.handle('clear-recent-list', clearRecentList);
	ipcMain.handle('open-recent-file', openRecentFile);
	ipcMain.handle('read-recent-files', readRecent);
	ipcMain.handle('open-file', openFile);

	win.loadFile(path.join(__dirname, "views/index.html"));

	// win.webContents.openDevTools()
}

app.whenReady().then(() => {
	// ipcMain.on('read-recent-files', readRecent);
	
	mainWin();

	app.on('activate', () => {
    	if (BrowserWindow.getAllWindows().length === 0) createWindow();
  	});
});

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') app.quit();
});
