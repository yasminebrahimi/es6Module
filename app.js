

import { fetchData } from "./utils.js";
import { displayData, displayError, showLoadingIndicator, hideLoadingIndicator } from "./ui.js";

async function main() {
    try {
        showLoadingIndicator();
        const data = await fetchData('https://api.example.com/data');
        hideLoadingIndicator();
        displayData(data);
    } catch (error) {
        hideLoadingIndicator();
        handleFetchError(error);
    }
}

function handleFetchError(error) {
    displayError('Error fetching data. Please try again later.');
    console.error('Error fetching data:', error);
}

main();
