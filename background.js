var host = "https://www.youtube.com/results?search_query=";
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {redirectUrl: host + details.url.match(/^https?:\/\/[^?]+[?][q][=]([^&]*).*/)[1]};
	},
	{
		urls: [
		  "*://yahoo.opera.com/search/*"
		],
		types: ["main_frame"]
	},
	["blocking"]
);
//http://yahoo.opera.com/search/?q={searchTerms}&fr=opera2&ei={inputEncoding}