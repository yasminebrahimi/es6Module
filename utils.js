



// Export an asynchronous function fetchData to fetch data from a URL
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}
