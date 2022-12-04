let readRecent = async () => {
	const recentFilesList = document.getElementById("files-recent");

	let recentFiles = await window.api.files.recent.read();

	if (typeof recentFiles != 'object') {

		let p = document.createElement('p');
		p.innerText = recentFiles;

		recentFilesList.appendChild(p);
	} else {
	
		for (recent of recentFiles) {
			let p = document.createElement('p');
			let li = document.createElement('li');
			let div = document.createElement('div');
			let header = document.createElement('h3');
			let descDiv = document.createElement('div');
	
	
			div.setAttribute('class', 'action-list-item actions-items-flex-display');
			div.setAttribute('name', recent.name);
			div.setAttribute('path', recent.path);
			// div.onclick = (element) => recentFilesButtonHandler(element);
			div.setAttribute('onclick', 'recentFilesButtonHandler(this)');
	
			descDiv.setAttribute('class', 'action-list-desc');
	
			header.innerText = 'File Name: ' + recent.name;
			p.innerText = 'Path: ' + recent.path;
	
			descDiv.appendChild(header);
			descDiv.appendChild(p);
	
			div.appendChild(descDiv);
	
			li.appendChild(div);
	
			recentFilesList.appendChild(li);
	
		}
	}
	
}

let clearRecentList = async () => {
	let configPath = window.api.config.path();

	await window.api.files.recent.clear(configPath);

	const recentFilesList = document.getElementById("files-recent");

	recentFilesList.innerHTML = '';

}

readRecent();