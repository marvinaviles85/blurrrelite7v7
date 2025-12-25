/**
 * BLURRR PREDATORS - SITE LOGIC
 * Handles dynamic tournament schedule injection
 */

// 1. Tournament Data Array
// This is the only place you need to update when new tournaments are added.
const tournamentData = [
    { 
        date: "MAR 12, 2024", 
        name: "Battle at the Border", 
        location: "North Augusta, SC", 
        result: "W 24-12" 
    },
    { 
        date: "MAR 19, 2024", 
        name: "Queen City Showdown", 
        location: "Charlotte, NC", 
        result: "TBD" 
    },
    { 
        date: "MAR 26, 2024", 
        name: "Palmetto State 7v7", 
        location: "Columbia, SC", 
        result: "TBD" 
    },
    { 
        date: "APR 02, 2024", 
        name: "Peach State Invitational", 
        location: "Atlanta, GA", 
        result: "TBD" 
    },
    { 
        date: "APR 09, 2024", 
        name: "Elite Beast Mode 7v7", 
        location: "Augusta, GA", 
        result: "TBD" 
    }
];

// 2. Function to build the table
function loadTournamentSchedule() {
    const tableBody = document.getElementById('schedule-body');

    // Only run if the table body exists (prevents errors on index.html)
    if (tableBody) {
        console.log("Schedule element found. Injecting data...");
        
        // Map through data and create HTML rows
        const rows = tournamentData.map(item => {
            return `
                <tr>
                    <td>${item.date}</td>
                    <td style="font-weight: bold; color: #D32F2F;">${item.name.toUpperCase()}</td>
                    <td>${item.location.toUpperCase()}</td>
                    <td style="font-weight: bold;">${item.result}</td>
                </tr>
            `;
        }).join('');

        tableBody.innerHTML = rows;
    } else {
        console.log("Schedule element not found. Skipping table load.");
    }
}

// 3. Run when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTournamentSchedule();
});
