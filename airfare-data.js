
const airfareData = {
  "New York": { airline: "Lufthansa", cost: 750 },
  "Chicago": { airline: "Turkish Airlines", cost: 780 },
  "Los Angeles": { airline: "Qatar Airways", cost: 890 },
  "Miami": { airline: "Air France", cost: 810 },
  "Houston": { airline: "Emirates", cost: 870 }
};

// Function to build and insert table
function renderAirfareTable(data) {
  const container = document.getElementById("airfare-table-container");
  if (!container || !data) return;

  const table = document.createElement("table");
  table.className = "airfare-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Departure City</th>
        <th>Airline</th>
        <th>Estimated Cost (USD)</th>
      </tr>
    </thead>
    <tbody>
      ${Object.entries(data).map(([city, info]) =>
        `<tr><td>${city}</td><td>${info.airline}</td><td>$${info.cost}</td></tr>`
      ).join("")}
    </tbody>
  `;

  container.appendChild(table);
}

// Render the table on page load
document.addEventListener("DOMContentLoaded", () => renderAirfareTable(airfareData));