/**
 * BLURRR PREDATORS - SITE LOGIC
 * Handles dynamic tournament schedule injection
 */

// 1. Tournament Data Array
// This is the only place you need to update when new tournaments are added.
const tournamentData = [
    { 
        date: "FEB 14 - 15, 2026", 
        name: "BEA 7v7", 
        location: "ATLANTA, GA",  
    },
    { 
        date: "FEB 21, 2026", 
        name: "FSG NATIONAL SERIES", 
        location: "KNOXVILLE, TN", 
    },
    { 
        date: "MAR 21 - 22, 2026", 
        name: "PREP REDZONE RTE 66 CLASSIC", 
        location: "ROCK HILL, SC", 
    },
    { 
        date: "MAR 28 - 29, 2026", 
        name: "BEA NATIONAL CHAMPIONSHIP", 
        location: "ATLANTA, GA", 
    },
    { 
        date: "APR 10 - 11, 2026", 
        name: "FSG NATIONAL CHAMPIONSHIP", 
        location: "ATLANTA, GA",  
    },
    {
        date: "APR 25 - 26, 2026",
        name: "PREP REDZONE",
        location: "EMERSON, GA",
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
