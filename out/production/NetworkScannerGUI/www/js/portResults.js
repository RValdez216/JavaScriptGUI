function displayResult(message) {
  var resultArea = document.getElementById("resultArea");
  resultArea.innerHTML = message;
}

document.getElementById("scanButton").addEventListener("click", function() {
  // You can generate dynamic content here based on the user's input
  var ipAddress = document.getElementById("IpAddress").value;
  var subnetMask = document.getElementById("SubnetMask").value;
  var startingPort = document.getElementById("StartingPort").value;
  var endingPort = document.getElementById("EndingPort").value;

  // Generate the dynamic message
  var iP = "Scanning IP: " + ipAddress;
  var sNet = "Subnet Mask: " + subnetMask;
  var sPort = "Starting port: " + startingPort;
  varr ePort = "End port: " + endingPort;

  // Call the displayResult function to update the result area
  displayResult(iP);
  displayResult(sNet);
  displayResult(sPort);
  displayResult(ePort);
});
