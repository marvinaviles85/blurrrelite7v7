const games = [
    { date: "Mar 12", opponent: "Storm Elite", time: "10:00 AM", result: "W 24-12" },
    { date: "Mar 19", opponent: "Red Zone Flyers", time: "1:30 PM", result: "TBD" },
    { date: "Mar 26", opponent: "Carolina Speed", time: "11:00 AM", result: "TBD" }
];

const scheduleBody = document.getElementById('schedule-body');

function loadSchedule() {
    scheduleBody.innerHTML = games.map(game => `
        <tr>
            <td>${game.date}</td>
            <td>${game.opponent}</td>
            <td>${game.time}</td>
            <td style="font-weight: bold; color: #D32F2F">${game.result}</td>
        </tr>
    `).join('');
}

window.onload = loadSchedule;
