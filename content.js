document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText) {
      console.log("Selected text:", selectedText); // Debugging: log the selected text
  
      // Send the selected text to the background script
      chrome.runtime.sendMessage({
        type: 'textSelected',
        text: selectedText
      });
    }
  });
  