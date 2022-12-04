const {contextBridge, ipcRenderer} = require("electron");
const path = require("path");


contextBridge.exposeInMainWorld("api", {
	versions: {
		node: () => process.versions.node
	},
	icons: {
		iconsPath: () => path.join(__dirname, "../icons/")
	},
	config: {
		path: () => path.join(__dirname, "../config/")
	},
	files: {
		file: {
			open: (configPath) => ipcRenderer.invoke("open-file", configPath)
		},
		recent: {
			read:  (configFilesPath) => ipcRenderer.invoke("read-recent-files", configFilesPath),
			open:  (file) => ipcRenderer.invoke("open-recent-file", file),
			clear: (configPath) => ipcRenderer.invoke("clear-recent-list", configPath)
		}
	}

})