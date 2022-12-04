let recentFilesButtonHandler = async(element) => {
	let name = element.getAttribute('name'),
		path = element.getAttribute('path');

	let url = 'view-recent.html?name=' + name + '&path=' + path;

	document.location.href = url;

}

let openRecentFile = async () => {
	let urlParams = document.location.href.split("?")[1].split("&");
	let data = {};

	for (urlParam of urlParams) {
		let paramName = urlParam.split("=")[0];
		let paramData = urlParam.split("=")[1];
	
		data[paramName] = paramData;
	}

	console.log(data);

	let name = data.name;
	let path = data.path;

	let file = await window.api.files.recent.open({name: name, pathToRecent: path});

	let markdownPaste = document.getElementById('paste-markdown');
	let viewNormalButton = document.getElementById('view-normal');
	let viewSetTitle = document.getElementById('set-view-title');
	let rawMarkdownPaste = document.getElementById('paste-raw');
	let viewRawButton = document.getElementById('view-raw');

	if (viewSetTitle != null)
		viewSetTitle.innerText = file.fileName + " - Simple Markdown Reader";

	if (markdownPaste != null) {
		markdownPaste.innerHTML = file.fileData;
	}

	if (viewRawButton != null) {
		viewRawButton.addEventListener('click', () => {
			rawMarkdownPaste.innerText = '';
			markdownPaste.innerHTML = '';

			viewRawButton.setAttribute("disabled", true);
			viewNormalButton.removeAttribute("disabled");

			markdownPaste.setAttribute('style', "visibility: hidden");
			rawMarkdownPaste.setAttribute('style', "visibility: visible");

			let code = document.createElement('code');

			code.innerText = file.fileDataRow;

			rawMarkdownPaste.appendChild(code);

		})
	}

	if (viewNormalButton != null) {
		viewNormalButton.addEventListener('click', () => {
			rawMarkdownPaste.innerText = '';
			markdownPaste.innerHTML = '';

			viewNormalButton.setAttribute("disabled", true);
			viewRawButton.removeAttribute("disabled")

			markdownPaste.setAttribute('style', "visibility: visible");
			rawMarkdownPaste.setAttribute('style', "visibility: hidden");

			markdownPaste.innerHTML = file.fileData;
		})
	}
}