



// Export a function displayData to render data on the UI
export function displayData(data) {
    // Create a container element to hold the data
    const container = document.createElement('div');
    container.classList.add('data-container');

    // Iterate through the data and create a paragraph element for each item
    data.forEach(item => {
        const element = document.createElement('p');
        element.textContent = `${item.name}: ${item.value}`;
        container.appendChild(element);
    });

    // Append the container to the body of the document
    document.body.appendChild(container);
}
