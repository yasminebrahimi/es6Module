

// Display data on the UI
export function displayData(data) {
    clearDataContainers();

    if (!data || data.length === 0) {
        displayError('No data available.');
        return;
    }

    try {
        const container = document.createElement('div');
        container.classList.add('data-container');

        data.forEach(item => {
            const element = document.createElement('p');
            element.textContent = `${item.name}: ${item.value}`;
            container.appendChild(element);
        });

        document.body.appendChild(container);
    } catch (error) {
        handleDisplayError(error);
    }
}

// Display error message on the UI
export function displayError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');
    errorContainer.textContent = message;
    document.body.appendChild(errorContainer);
}

// Show loading indicator
export function showLoadingIndicator() {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading-indicator');
    loadingIndicator.textContent = 'Loading...';
    document.body.appendChild(loadingIndicator);
}

// Hide loading indicator
export function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// Clear existing data and error containers
function clearDataContainers() {
    const dataContainers = document.querySelectorAll('.data-container');
    dataContainers.forEach(container => container.remove());

    const errorContainers = document.querySelectorAll('.error-container');
    errorContainers.forEach(container => container.remove());
}
