




import { fetchData } from "./utils.js";
import { displayData } from "./ui.js";

async function main() {
    try {
        const data = await fetchData('https://api.example.com/data');
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

main();
