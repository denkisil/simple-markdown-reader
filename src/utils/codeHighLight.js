const hljs = require("highlight.js");

let highLightCode = async (str, lang) => {
	if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
}

module.exports = {
	highLightCode: highLightCode
}