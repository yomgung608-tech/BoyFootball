const matches = [
  {
    home: "Arsenal",
    away: "Chelsea",
    date: "18 November 2026",
    time: "19:30 WIB",
    league: "Premier League"
  },
  {
    home: "Real Madrid",
    away: "Barcelona",
    date: "20 November 2026",
    time: "21:00 WIB",
    league: "La Liga"
  },
  {
    home: "Persib Bandung",
    away: "Persija Jakarta",
    date: "22 November 2026",
    time: "19:00 WIB",
    league: "Liga Indonesia"
  },
  {
    home: "Liverpool",
    away: "Manchester City",
    date: "23 November 2026",
    time: "20:00 WIB",
    league: "Premier League"
  }
];

function showMatches(search = "") {
  const list = document.getElementById("matchList");

  const filtered = matches.filter(match =>
    (match.home + " " + match.away + " " + match.league)
    .toLowerCase().includes(search.toLowerCase())
  );

  list.innerHTML = filtered.map(match => `
    <div class="match-card">
      <div>
        <b>${match.home}</b>
        <br>VS<br>
        <b>${match.away}</b>
      </div>
      <div>
        ${match.date}<br>
        ${match.time}<br>
        ${match.league}
      </div>
    </div>
  `).join("");

  if (filtered.length === 0) {
    list.innerHTML = "Pertandingan tidak ditemukan.";
  }
}

document.getElementById("matchSearch")
  .addEventListener("input", function() {
    showMatches(this.value);
  });

const standings = [
  ["1", "Arsenal", "25"],
  ["2", "Liverpool", "23"],
  ["3", "Manchester City", "22"],
  ["4", "Chelsea", "18"],
  ["5", "Tottenham", "17"]
];

document.getElementById("standingsBody").innerHTML =
  standings.map(team => `
    <article>
      ${team[0]}. ${team[1]} — ${team[2]} Poin
    </article>
  `).join("");

showMatches();
