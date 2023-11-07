// goToIndex.js

// Function to navigate back to "index.html"
function goToIndex() {
    window.location.href = 'index.html';
}

// Add an event listener to the button
document.getElementById("goToIndexButton").addEventListener("click", goToIndex);
