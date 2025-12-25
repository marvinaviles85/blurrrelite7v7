/**
 * BLURRR PREDATORS - SITE LOGIC
 * Manages the Tournament Schedule and Page Initialization
 */

// 1. Tournament Data Array
// Format: Date, Tournament Name, Location (City, ST), and Result
const tournamentData = [
    { 
        date: "MAR 12, 2024", 
        name: "Battle at the Border", 
        location: "NORTH AUGUSTA, SC", 
        result: "W 24-12" 
    },
    { 
        date: "MAR 19, 2024", 
        name: "Queen City Showdown", 
        location: "CHARLOTTE, NC", 
        result: "TBD" 
    },
    { 
        date: "MAR 26, 2024", 
        name: "Palmetto State 7v7", 
        location: "COLUMBIA, SC", 
        result: "TBD" 
    },
    { 
        date: "APR 02, 2024", 
        name: "Peach State Invitational", 
        location: "ATLANTA, GA", 
        result: "TBD" 
    },
    { 
        date: "APR 09, 2024", 
        name: "Elite Beast Mode 7v7", 
        location: "AUGUSTA, GA", 
        result: "TBD" 
    }
];

// 2. Function to Load and Inject the Schedule Table
function initSchedule() {
    // Look for the table body element on the current page
    const tableBody = document.getElementById('schedule-body');

    // If we are NOT on the schedule page, this element won't exist
    if (!tableBody) {
        console.log("Home page detected: Skipping schedule initialization.");
        return;
    }

    console.log("Schedule page detected: Generating tournament rows...");

    // Generate HTML for each row
    let tableHTML = "";

    tournamentData.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.date}</td>
                <td style="font-weight: bold; color: #D32F2F; letter-spacing: 1px;">
                    ${item.name.toUpperCase()}
                </td>
                <td>${item.location.toUpperCase()}</td>
                <td style="font-weight: bold;">${item.result}</td>
            </tr>
        `;
    });

    // Inject the rows into the table
    tableBody.innerHTML = tableHTML;
}

// 3. Page Initialization Logic
document.addEventListener('DOMContentLoaded', () => {
    initSchedule();
    
    // Future features like a roster or gallery can be initialized here
    console.log("Blurrr Predators site fully loaded.");
});
