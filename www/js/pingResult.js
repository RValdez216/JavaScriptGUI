var pingResults = []; // Initialize an array to store ping results

function displayLoadingMessage() {
    var resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "Loading..."; // Display loading message
}

function displayPingResult(result) {
    var resultArea = document.getElementById("resultArea");
    var newContent = document.createElement("div"); // Create a new <div> element

    newContent.innerHTML = "Ping Result: " + result;

    resultArea.innerHTML = ""; // Clear loading message
    resultArea.appendChild(newContent);
    pingResults.push(result); // Add the result to the array
}

document.getElementById("scanButton").addEventListener("click", function () {
    // Display loading message
    displayLoadingMessage();

    // Simulate a ping result (replace this with your actual ping logic)
    var ipAddress = document.getElementById("IpAddress").value;
    var subnetMask = document.getElementById("SubnetMask").value;

    var pingResult = "Pinging " + ipAddress + " with subnet mask " + subnetMask + " - Reply received.";

    // Call the displayPingResult function to update the result area with the ping result
    // Simulate delay to show loading message (replace with actual asynchronous operation)
    setTimeout(function () {
        displayPingResult(pingResult);
    }, 2000); // Adjust the delay time as needed
});
