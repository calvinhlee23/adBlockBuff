var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('foo');

const blockFunction = (details) => {
  return { cancel: true};
};

const options = ["blocking"];

var webRequest = chrome.webRequest;
const AD_URLS = ["*://scontent-yyz1-1.xx.fbcdn.net/*", "*://onclickads.net/*",
      "*://*/banner/*", "*://go.moonclick/*",
      "*://creative.wwwpromoter.com/*","*://*.googlevideo.com/crossdomain.xml",
      "*://*/ads/*"];
webRequest.onBeforeRequest.addListener( blockFunction,{urls: AD_URLS}, options);
