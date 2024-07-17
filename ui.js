





export function displayData(data) {
    const container = document.createElement('div');
    container.classList.add('data-container');

    data.forEach(item => {
        const element = document.createElement('p');
        element.textContent = `${item.name}: ${item.value}`;
        container.appendChild(element);
    });

    document.body.appendChild(container);
}
