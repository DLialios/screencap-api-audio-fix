chrome.webNavigation.onCommitted.addListener((details) => {
    chrome.tabs.executeScript(details.tabId, {
        file: "inject.js",
        runAt: "document_start",
        allFrames: true
    });
});
