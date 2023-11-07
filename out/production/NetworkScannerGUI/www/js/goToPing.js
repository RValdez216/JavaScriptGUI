
function goToPing() {

        console.log("Button clicked");
        window.location.href = '/www/ping.html';

    }

    // Add an event listener to the button
    document.getElementById("goToPing").addEventListener("click", goToPing);