
var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('foo');

const blockFunction = (details) => {
  return bkg.console.log(details);
};
const options = ["blocking"];
document.addEventListener("beforeLoad", () => {

});

var webRequest = chrome.webRequest;
webRequest.onBeforeRequest.addListener( blockFunction,{urls: ["<all_urls>"]});
