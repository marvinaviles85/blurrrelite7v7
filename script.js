/**
 * BLURRR PREDATORS - SITE LOGIC
 */

// 1. Centralized Schedule Data
// Update this array to change games across the site
const gameData = [
    { date: "MAR 12, 2024", opponent: "Storm Elite", time: "10:00 AM", result: "W 24-12" },
    { date: "MAR 19, 2024", opponent: "Red Zone Flyers", time: "1:30 PM", result: "TBD" },
    { date: "MAR 26, 2024", opponent: "Carolina Speed", time: "11:00 AM", result: "TBD" },
    { date: "APR 02, 2024", opponent: "Georgia Heat", time: "9:00 AM", result: "TBD" },
    { date: "APR 09, 2024", opponent: "Palmetto Punishers", time: "12:00 PM", result: "TBD" }
];

// 2. Function to load schedule table
function initSchedule() {
    const tableBody = document.getElementById('schedule-body');

    // Only proceed if the element exists (prevents errors on index.html)
    if (tableBody) {
        console.log("Schedule detected: Generating game rows...");
        
        let tableHTML = "";

        gameData.forEach(game => {
            tableHTML += `
                <tr>
                    <td>${game.date}</td>
                    <td style="font-weight: bold; color: #D32F2F;">${game.opponent.toUpperCase()}</td>
                    <td>${game.time}</td>
                    <td class="result-cell">${game.result}</td>
                </tr>
            `;
        });

        tableBody.innerHTML = tableHTML;
    }
}

// 3. Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSchedule();
    
    // You can add more initializers here (like Roster logic) in the future
});
