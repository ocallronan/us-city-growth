const svg = d3.select("#svg2");
const mapGroup = d3.select("#mapGroup");
const baseMapLayer = d3.select("#baseMapLayer");
const cityLayer = d3.select("#cityLayer")

const svg2 = document.getElementById("chart");
const ns = "http://www.w3.org/2000/svg";

function ordinalSuffix(n) {
  if (n > 3 && n < 21) return n + "th"; // special case for teens
  switch (n % 10) {
    case 1: return n + "st";
    case 2: return n + "nd";
    case 3: return n + "rd";
    default: return n + "th";
  }
}

const cities = [nyc, chicago, la, sf, dallas,
  houston,
  philly,
  miami,
  atlanta,
  dc,
  boston,
  phoenix,
  detroit,
  seattle,
  denver,
  sd,
  minneapolis,
  tampa,
  baltimore,
  cleveland,
  stLouis,
  pittsburgh,
  milwaukee,
  buffalo,
  cincinnati,
  ks,
  nola,
  indianapolis,
  providence,
  albany,
  louisville,
  rochester,
  nh,
  portland,
  syracuse,
  nb,
  newark,
  nantucket,
  hartford,
  richmond,
  norfolk,
  charleston,
  salem,
  newport,
  gloucester,
  newburyport,
  portsmouth,
  middleborough,
  alexandria,
  petersburg,
  savannah,
  nl,
  schenectady]; // Add your City instances here

const stateAdmission = {
  "01": 1819, // Alabama
  "02": 1959, // Alaska
  "04": 1912, // Arizona
  "05": 1836, // Arkansas
  "06": 1850, // California
  "08": 1876, // Colorado
  "09": 1788, // Connecticut
  "10": 1787, // Delaware
  "11": 1790, // DC (treated as 1790 here)
  "12": 1845, // Florida
  "13": 1788, // Georgia
  "15": 1959, // Hawaii
  "16": 1890, // Idaho
  "17": 1818, // Illinois
  "18": 1816, // Indiana
  "19": 1846, // Iowa
  "20": 1861, // Kansas
  "21": 1792, // Kentucky
  "22": 1812, // Louisiana
  "23": 1788, // Maine
  "24": 1788, // Maryland
  "25": 1788, // Massachusetts
  "26": 1837, // Michigan
  "27": 1858, // Minnesota
  "28": 1817, // Mississippi
  "29": 1821, // Missouri
  "30": 1889, // Montana
  "31": 1867, // Nebraska
  "32": 1864, // Nevada
  "33": 1788, // New Hampshire
  "34": 1787, // New Jersey
  "35": 1912, // New Mexico
  "36": 1788, // New York
  "37": 1789, // North Carolina
  "38": 1889, // North Dakota
  "39": 1803, // Ohio
  "40": 1907, // Oklahoma
  "41": 1859, // Oregon
  "42": 1787, // Pennsylvania
  "44": 1790, // Rhode Island
  "45": 1788, // South Carolina
  "46": 1889, // South Dakota
  "47": 1796, // Tennessee
  "48": 1845, // Texas
  "49": 1896, // Utah
  "50": 1791, // Vermont
  "51": 1788, // Virginia
  "53": 1889, // Washington
  "54": 1788, // West Virginia
  "55": 1848, // Wisconsin
  "56": 1890  // Wyoming
};

const usPopulationByDecade = {
    1790: 3929214,
    1800: 5308483,
    1810: 7239881,
    1820: 9638453,
    1830: 12866020,
    1840: 17069453,
    1850: 23191876,
    1860: 31443321,
    1870: 38558371,
    1880: 50189209,
    1890: 62979766,
    1900: 76212168,
    1910: 92228496,
    1920: 106021537,
    1930: 123202624,
    1940: 132164569,
    1950: 151325798,
    1960: 179323175,
    1970: 203302031,
    1980: 226542199,
    1990: 248709873,
    2000: 281421906,
    2010: 308745538,
    2020: 331449281,
}

const urbanPercent = {
  1790: 5.1,
  1800: 6.1,
  1810: 15.4,
  1820: 7.2,
  1830: 8.8,
  1840: 10.8,
  1850: 15.4,
  1860: 19.8,
  1870: 25.7,
  1880: 28.2,
  1890: 35.1,
  1900: 39.6,
  1910: 45.6,
  1920: 51.2,
  1930: 56.1,
  1940: 56.5,
  1950: 64,
  1960: 69.9,
  1970: 73.6,
  1980: 73.7,
  1990: 75.2,
  2000: 81,
  2010: 80.7,
  2020: 83,
}

function wrapTextByChars(text, maxChars = 40) {
  const words = text.split(" ");
  let lines = [];
  let currentLine = "";

  for (let word of words) {
    // If adding this word goes past limit, wrap (but don't cut the word)
    if ((currentLine + word).length > maxChars) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  }

  // Push the last line if not empty
  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines.join("<br>");
}

let currentZoomScale = 1;
//const mapGroup = svg.append("g").attr("id", "mapGroup");

const projection = d3.geoAlbersUsa()
    .translate([480, 300])
    .scale(1000);

const path = d3.geoPath().projection(projection);

d3.json("us.json").then(us => {
  baseMapLayer
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", d => {
      const admission = stateAdmission[d.id];
      return (admission && admission <= year) ? "#8c8d91" : "#dcdcdc";
    })
    .attr("stroke", "#fafafa");
});

class CityDot {
  constructor(svg, projection, cityData, year) {
    this.svg = svg;
    this.projection = projection;
    this.city = cityData;
    this.year = year;

    if (this.city.population[year] === undefined) {
    return;
   }
    this.draw();
  }

  draw() {
    const [x, y] = this.projection(this.city.coords);

    const maxPop = getMaxPopulation(this.year); // ✅ Get largest city population this year
    const pop = this.city.population[this.year];

    const rank = getCityRank(this.city, this.year);
    const color = (typeof rank === "number") ? rankColorScale(rank) : "#ccc";

    const minRadius = 4;
    const maxRadius = 20;
    
    let radius = minRadius + (pop / maxPop) * (maxRadius - minRadius);
    let scaledRadius = radius / currentZoomScale;

    d3.select("#cityLayer").append("circle")
      .attr("class", "city-dot")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", scaledRadius) // scaled on zoom
      .attr("data-base-radius", radius)
      //.attr("fill", color)
      .style("fill", color)
      .attr("stroke", "#444")
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mouseenter", (event) => this.showPopup(event))
      .on("mousemove", (event) => this.updatePopupPosition(event))
      .on("mouseleave", () => this.hidePopup());  
    
    }

      updatePopupPosition(event) {
        d3.select("#popup")
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 20) + "px");
      }
      
      hidePopup() {
        d3.select("#popup").style("display", "none");
      }

  showPopup(event) {
    const popup = d3.select("#popup");
    const rank = getCityRank(this.city, this.year); 

    popup
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 20) + "px")
      .style("display", "block")
      .style("max-width", "300px") // <-- added max width
      .html(`
        <span class="city-name">${this.city.name}</span><br>
        <span class="label">Population:</span> ${this.city.population[year].toLocaleString()}<br>
        <span class="label">Rank:</span> ${ordinalSuffix(rank)}<br>
        <span class="label">Relative Peak Decade:</span> ${this.city.peakDecade} at ${ordinalSuffix(getCityRank(this.city, this.city.peakDecade))}<br>
        <span class="label">At Its Relative Peak:</span> ${(this.city.info)}
      `);
 
    event.stopPropagation(); // Don't let body click immediately close it
  }
}

const zoom = d3.zoom()
  .scaleExtent([0.5, 8]) // Zoom out to 50%, in to 800%
  .on("zoom", (event) => {
    const { transform } = event;
    currentZoomScale = transform.k;
    mapGroup.attr("transform", event.transform);

    d3.selectAll(".city-dot").attr("r", function () {
      const baseRadius = +d3.select(this).attr("data-base-radius");
      return baseRadius / currentZoomScale;
    });
  });

// Apply zoom to the SVG
svg.call(zoom);

d3.select("#resetZoom").on("click", () => {
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
});

const rankColorScale = d3.scaleSequential()
  .domain([20, 1]) // Rank 1 is best, Rank 20 is lowest
  .interpolator(d3.interpolateHcl("#F0E68C", "#DAA520"))

function getCityRank(city, year) {  
  const citiesWithData = cities
    .filter(c => c.population[year] != null)
    .sort((a, b) => b.population[year] - a.population[year]);

  const idx = citiesWithData.findIndex(c => c.name === city.name);
  return idx === -1 ? null : idx + 1;
}

function getMaxPopulation(year) {
  const citiesWithData = cities.filter(c => c.population[year] !== undefined);
  const max = d3.max(citiesWithData, c => c.population[year]);
  return max || 1; // avoid division by zero
}
let year = 1790;

function getTop20MetroShare(year) {
  const citiesWithData = cities
    .filter(c => c.population[year] !== undefined)
    .sort((a, b) => b.population[year] - a.population[year])
    .slice(0, 20); // Top 20

  const totalTop20 = citiesWithData.reduce((sum, c) => sum + c.population[year], 0);
  const totalUS = usPopulationByDecade[year];

  if (!totalTop20 || !totalUS) return "N/A";

  const percent = (totalTop20 / totalUS) * 100;
  return percent.toFixed(2); // Return with two decimal places
}

d3.select("#yearSlider").on("input", function(){
  year = +this.value;
  d3.select("#yearDisplay").text(year);

  baseMapLayer.selectAll("path")
    .attr("fill", d => {
      const admission = stateAdmission[d.id];
      return (admission && admission <= year) ? "#8c8d91" : "#D3D3D3";
    });

  d3.select("#svg2").selectAll("circle").remove();

  renderCitiesForYear(year);
});

function renderCitiesForYear(year) {
  cities.forEach(city => {
    new CityDot(d3.select("#svg2"), projection, city, year);
  });

  d3.select("#metroShareValue").text(getTop20MetroShare(year) + "%");

  document.getElementById("urbanPercentValue").textContent =
  urbanPercent[year] !== undefined ? urbanPercent[year].toFixed(1) + "%" : "N/A";

  //const pct = getTop20MetroShare(year);
  //d3.select("#metroShareValue").text(pct + "%");
}

function assignPeakDecades(cities) {
  cities.forEach(city => {
    let bestRank = Infinity;
    let bestDecades = [];

    for (const year in city.population) {
      const rank = getCityRank(city, Number(year));

      if (typeof rank === "number") {
        if (rank < bestRank) {
          bestRank = rank;
          bestDecades = [Number(year)];
        } else if (rank === bestRank) {
          bestDecades.push(Number(year));
        }
      }
    }

    city.peakDecade = Math.max(...bestDecades); // prefer latest if tied
  });
}

function drawCircle(cx, cy, r, fill) {
  const circle = document.createElementNS(ns, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fill);
  svg2.appendChild(circle);
}

const legendBox = document.getElementById("legend-box");

function addLegendItem(color, text) {
  const item = document.createElement("div");
  item.className = "legend-item";

  const colorCircle = document.createElement("div");
  colorCircle.className = "legend-color";
  colorCircle.style.background = color;

  const label = document.createElement("span");
  label.textContent = text;

  item.appendChild(colorCircle);
  item.appendChild(label);
  legendBox.appendChild(item);
}

// Static legend entries
addLegendItem("#8c8d91", "State");
addLegendItem("#dcdcdc", "Not a state \n");

// Gradient explanation
addLegendItem("#DAA520", "Largest city in specified year");
addLegendItem("#F0E68C", "#20th largest city in specified year");

assignPeakDecades(cities);

renderCitiesForYear(year)
