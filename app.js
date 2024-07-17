


import { fetchData } from "./utils.js";
import { displayData } from "./ui.js";

async function main() {
    try {
        // Fetch data asynchronously using fetchData function
        const data = await fetchData('https://api.example.com/data');
        // Display the fetched data using displayData function
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Invoke the main function to start the application
main();
