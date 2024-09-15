// Step 0: Define the date object

let currentDate = new Date(); // Step 1: Initialize the date object

//Function to format date as dd/mm/yyyy
function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    // Define an array of month names
    const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
                        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let month = monthNames[date.getMonth()]; // Use the month index to get the month name
    let year = date.getFullYear();
    return `${day} ${month} ${year}`; // Change the format to include the month name
}

// Update the displayed date
function updateDisplayedDate() {
    document.getElementById('currentDate').textContent = formatDate(currentDate);
}

// Initially set the current date
updateDisplayedDate();

// Step 2: Add event listeners to arrows
document.querySelector('.arrow-left').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1); // Move one day back
    updateDisplayedDate(); // Update the displayed date
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1); // Move one day forward
    updateDisplayedDate(); // Update the displayed date
});

// Import the openDataInsertionWindow function from newcard.js
import { openDataInsertionWindow } from './newcard.js';

// Assuming "Nuova Attività" button has an ID 'newActivityBtn'
document.getElementById('newActivityBtn').addEventListener('click', openDataInsertionWindow);

import "./style.css";



