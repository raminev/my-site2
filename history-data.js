
document.addEventListener("DOMContentLoaded", () => {
  const scale = document.getElementById("history-scale");
  const content = document.getElementById("history-content");

 
const historyData = {
  1703: "",
  1725: "Saint Petersburg was founded by Tsar Peter the Great in 1703 as a new, Western-facing capital of Russia. Built on marshland, it symbolized a break from traditional Russian ways and a move toward European modernization.",
  
  1773: "After Peter the Great's death in 1725, the city continued to grow under successive rulers. It became a center of imperial power, with grand palaces and institutions like the Academy of Sciences founded.",
  
  1812: "By 1773, under Catherine the Great, Saint Petersburg was firmly established as the capital and a major European cultural hub. The city flourished in philosophy, arts, and urban development.",
  
  1861: "During the Napoleonic Wars, Saint Petersburg remained a political and cultural stronghold. While Moscow was invaded, Saint Petersburg coordinated the empire's military and diplomatic strategies.",
  
  1905: "Following the emancipation of the serfs in 1861, Saint Petersburg saw social and economic change. Industrialization accelerated, and political tensions began to rise among workers and intellectuals.",
  
  1917: "The 1905 Revolution saw mass protests and the Bloody Sunday massacre in Saint Petersburg, marking the beginning of serious unrest that would lead to revolution.",
  
  1941: "In 1917, the city (then called Petrograd) was the epicenter of the Russian Revolution. The February and October Revolutions ended imperial rule and brought the Bolsheviks to power.",
  
  1991: "Renamed Leningrad, the city endured a brutal siege by Nazi Germany from 1941 to 1944 during World War II. Over a million civilians died, but the city never surrendered.",
  
  2025: "After the fall of the Soviet Union in 1991, the city regained its historical name, Saint Petersburg. It transitioned toward a market economy and democratic governance amid nationwide upheaval. Today, Saint Petersburg is Russia's second-largest city and a cultural capital. It combines its imperial legacy and Soviet history with modern Russian identity, attracting millions of visitors each year."
};

    const years = Object.keys(historyData).map(Number).sort((a, b) => a - b);

  const list = document.createElement("ul");
  list.className = "timeline-list";

  years.forEach((year, index) => {
    if (index > 0) {
      const item = document.createElement("li");
      item.className = "timeline-item";
      item.innerText = `${years[index - 1]}–${year}`;
      item.dataset.start = years[index - 1];
      item.dataset.end = year;

      item.addEventListener("mouseover", () => item.classList.add("highlight"));
      item.addEventListener("mouseout", () => item.classList.remove("highlight"));
      item.addEventListener("click", () => {
        content.innerHTML = `<h2>${years[index - 1]}–${year}</h2><p>${historyData[year]}</p>`;
      });

      list.appendChild(item);
    }
  });

  scale.appendChild(list);
});

