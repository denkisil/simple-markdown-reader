const {Menu, app} = require("electron");

let template = [
	{
		label: app.name,
		submenu: [
			{label: "Settings"},
			{type: "separator"},
			{role: "quit"}
		]
	},
	{
		label: "File",
		submenu: [
			{label: "Open File"}
		]
	}
]

let appMenu = Menu.buildFromTemplate(template);

module.exports = {
	appMenu: appMenu
}

