// Function to open a window in the middle of the page
function openDataInsertionWindow() {
    // Create a modal element
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '5px';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.innerHTML = `<h2>Insert Data</h2>
                       <p>Here you can insert your data.</p>
                       <button id="closeModal">Close</button>`;
    document.body.appendChild(modal);

    // Close modal functionality
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.remove();
    });
}

// Export the function
export { openDataInsertionWindow };