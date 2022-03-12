let currentUlr = window.location.toString();
console.log(" currentUlr content");
console.log(currentUlr);
window.open('https://www.google.com', '_blank');
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") sendResponse({ farewell: currentUlr });
// });
