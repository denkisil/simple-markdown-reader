let openButton = document.getElementById("open-file");

let openButtonHandle = async () => {
	document.location.href = "view.html";
}

let openFile = async () => {
	let configPath = window.api.config.path();
	let file = await window.api.files.file.open(configPath);

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