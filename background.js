chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'textSelected') {
    console.log("Received selected text in background:", message.text);

    // Forward the selected text to the side panel
    chrome.runtime.sendMessage({
      type: 'explainCode',
      text: message.text
    });
  }
});
