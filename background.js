chrome.webNavigation.onCompleted.addListener(function(details) {
        chrome.tabs.executeScript(null, {file: 'jquery.js'}, () => {
            chrome.tabs.executeScript({file: 'sidebar_tabs.js'});
        });
    });