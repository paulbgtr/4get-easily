chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({url: "https://4get.ca/"})
})