// URL to fetch data from (initially set to www.google.com)
const url = 'https://www.google.com';

// Make a GET request using the fetch API
fetch(url)
    .then(response => {
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON (or text, depending on the API)
        return response.json(); // or response.text() for plain text
    })
    .then(data => {
        // Handle the data received from the API
        console.log('Data received:', data);
        // Perform any further processing or update your UI
    })
    .catch(error => {
        // Handle errors that may occur during the fetch operation
        console.error('Error fetching data:', error);
    });
