document.addEventListener("DOMContentLoaded", () => {
    const texts = ["a Software Engineering Undergraduate", "a Problem Solver", "an Innovative Thinker", "a Lifelong Learner"];
    let count = 0;
  
    const typingText = document.querySelector(".typing-text");
  
    function updateText() {
      typingText.textContent = texts[count];
      count = (count + 1) % texts.length; // Loop through texts
    }
  
    // Update every 3 seconds
    setInterval(updateText, 3000);
    updateText(); // Initialize on load
  });
  
  function showContent(tabId) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Highlight the selected tab button
    const activeButton = document.querySelector(`[onclick="showContent('${tabId}')"]`);
    activeButton.classList.add('active');
}
