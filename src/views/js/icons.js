const iconPath = window.api.icons.iconsPath();

const openFileIcon = document.getElementById("paste-open-file-icon");
const openRemoteIcon = document.getElementById("paste-open-remote-icon");

let openFileIconFile = iconPath + "open-md.png";
let openRemoteIconFile = iconPath + "open-md-remote.png";

const openFileIconImage = document.createElement("img");
const openRemoteIconImage = document.createElement("img");

openFileIconImage.setAttribute("src", openFileIconFile);
openFileIconImage.setAttribute("width", 30);
openFileIconImage.setAttribute("height", 30);

openRemoteIconImage.setAttribute("src", openRemoteIconFile);
openRemoteIconImage.setAttribute("width", 30);
openRemoteIconImage.setAttribute("height", 30);

openFileIcon.appendChild(openFileIconImage);
openRemoteIcon.appendChild(openRemoteIconImage);

