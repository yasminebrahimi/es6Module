import { fetchData } from "./utils.js";
import { displayData, displayError, showLoadingIndicator, hideLoadingIndicator } from "./ui.js";

async function main() {
    try {
        // Show loading indicator while fetching data
        showLoadingIndicator();

        // Fetch data asynchronously using fetchData function
        const data = await fetchData('https://api.example.com/data');

        // Hide loading indicator after data is fetched
        hideLoadingIndicator();

        // Display the fetched data using displayData function
        displayData(data);
    } catch (error) {
        // Hide loading indicator in case of error
        hideLoadingIndicator();

        // Display error message
        displayError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
    }
}

// Invoke the main function to start the application
main();
