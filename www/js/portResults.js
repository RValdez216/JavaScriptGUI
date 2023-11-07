var scanResults = []; // Initialize an array to store scan results

function displayResult(messages, hostName) {
  var resultsContainer = document.getElementById("resultsContainer");
  var newContent = document.createElement("div"); // Create a new <div> element

  var resultList = document.createElement("ul");
  resultList.style.listStyleType = "none"; // Remove the default list bullet points

  var listItem = document.createElement("li");
  listItem.innerHTML = "Scanned Host # " + (scanResults.length + 1) + "<br/>" + "Host Name: " + hostName + "<br/>" + messages.join("<br/>");
  resultList.appendChild(listItem);

  newContent.appendChild(resultList);
  resultsContainer.appendChild(newContent);

  // Add a unique identifier to the list item for highlighting
  var resultId = "result-" + scanResults.length;
  listItem.setAttribute("data-result-id", resultId);

  // Add the result reference number to the select box
  var selectBox = document.getElementById("resultRef");
  var option = document.createElement("option");
  option.value = resultId;
  option.textContent = "Scanned Host # " + (scanResults.length + 1);
  option.setAttribute("data-host-name", hostName);
  selectBox.appendChild(option);

  scanResults.push(resultId); // Add the result identifier to the array
}

var selectBox = document.getElementById("resultRef");
selectBox.addEventListener("change", function () {
  var selectedValue = selectBox.value;

  console.log("Selected Value:", selectedValue);

  var listItems = document.querySelectorAll("#resultsContainer ul li");

  listItems.forEach(function (item) {
    item.classList.remove("selected-result"); // Remove the highlight class from all items
  });

  var selectedListItem = document.querySelector(`[data-result-id="${selectedValue}"]`);
  console.log("Selected List Item:", selectedListItem);

  if (selectedListItem) {
    selectedListItem.classList.add("selected-result"); // Add the highlight class to the selected item
  }
});

document.getElementById("scanButton").addEventListener("click", function () {
  // You can generate dynamic content here based on the user's input
  var ipAddress = document.getElementById("IpAddress").value;
  var subnetMask = document.getElementById("SubnetMask").value;
  var startingPort = document.getElementById("StartingPort").value;
  var endingPort = document.getElementById("EndingPort").value;

  var hostName = document.getElementById("HostName").value; // Get the host name input value

  // Generate the dynamic messages for the scan result
  var messages = [
    "IP Address: " + ipAddress,
    "Subnet Mask: " + subnetMask,
    "Starting port: " + startingPort,
    "Ending port: " + endingPort
  ];

  // Call the displayResult function to update the result area with the formatted messages and host name
  displayResult(messages, hostName);
});