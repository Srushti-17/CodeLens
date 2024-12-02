chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "explainCode") {
    

    // Call the function to fetch the explanation
    fetchExplanation(message.text);
  }
});

async function fetchExplanation(selectedCode) {
  try {
    const { available } = await ai.languageModel.capabilities();

    if (available !== "no") {
      const session = await ai.languageModel.create({
        systemPrompt: `Explain the given code in simple, understandable way`,
      });

      const result = await session.prompt(selectedCode);

      console.log("Explanation:", result);
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = result || "No explanation available.";
    } else {
      console.error("AI capabilities are not available.");
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = "AI capabilities are not available.";
    }
  } catch (error) {
    console.error("An error occurred while fetching the explanation:", error);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "An error occurred. Please try again.";
  }
}


chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "explainCode") {

    document.getElementById("real-life-explanation").addEventListener("click", async () => {
      const resultDiv = document.getElementById("result");
      const resultDiv2 = document.getElementById("result2");
    
      resultDiv.style.display = "none";
    
      const selectedCode = message.text;
    
      try {
        const session = await ai.languageModel.create({
          systemPrompt: `Explain the same code, using a real-life example`,
        });
    
        const result2 = await session.prompt(selectedCode);
    
        console.log("Explanation with real-life examples:", result2);
        resultDiv2.style.display = "block";
        resultDiv2.textContent = result2 || "No explanation available.";
      } catch (error) {
        console.error("An error occurred while fetching the real-life explanation:", error);
        resultDiv2.textContent = "An error occurred. Please try again.";
      }
    });
  }
});


chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "explainCode") {
    

    document.getElementById("create-flashcards").addEventListener("click", async () => {
   
      const resultDiv3 = document.getElementById("result3");

      const selectedCode = message.text;
    
      try {
        const session = await ai.languageModel.create({
          systemPrompt: `Create a single playful, fun, and humorous flashcard based on the given code block, the card should focus on a lighthearted, quirky, 
          and creative aspect of the code to refresh the user's mind in a fun and engaging way, keep it minimal and cute, make sure the card is just 
          one line of text for the front and back, the goal is to make the user smile or laugh while remembering the concept,
          Keep it playful and light, for example:

            "What is the sound of a programmer's happiness?"  
            "console.log('It works!')"
            `
        });
    
        const result3 = await session.prompt(selectedCode);
    
        console.log("Flashcards:", result3);
        resultDiv3.style.display = "block";
        resultDiv3.textContent = result3 || "No explanation available.";
      } catch (error) {
        console.error("An error occurred while fetching the flashcards:", error);
        resultDiv3.textContent = "An error occurred. Please try again.";
      }
    });
  }
});




