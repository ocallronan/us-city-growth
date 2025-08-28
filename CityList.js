


class City {
  constructor(name, populationByYear, coords, info) {
    this.name = name;
    this.population = populationByYear;
    this.coords = coords;
    this.info = info;
  }
}

const nyc = new City("New York City", {
    1790: 33100,
    1800: 60500,
    1810: 101000,
    1820: 131000,
    1830: 215000,
    1840: 374000,
    1850: 650000,
    1860: 1143000,
    1870: 1687000,
    1880: 2234000,
    1890: 2977000,
    1900: 4266000,
    1910: 6021000,
    1920: 7041000,
    1930: 8667000,
    1940: 10135000,
    1950: 12604000,
    1960: 14437000,
    1970: 16193000,
    1980: 16500000,
    1990: 16754000,
    2000: 18689000,
    2010: 20009000,
    2020: 21162000,
}, [-74.006, 40.7128], "America's leading economic and cultural hub for over two centuries.");

const chicago = new City("Chicago", {
    1850: 40000,
    1860: 123000,
    1870: 324000,
    1880: 543000,
    1890: 1141000,
    1900: 1759000,
    1910: 2283000,
    1920: 2859000,
    1930: 3718000,
    1940: 4210000,
    1950: 5208000,
    1960: 6377000,
    1970: 7164000,
    1980: 7325000,
    1990: 7373000,
    2000: 8419000,
    2010: 9023000,
    2020: 9181000,
}, [-87.6298, 41.8781], "Diverse manufacturing, food processing, and logistics hub at the heart of the Midwest. ");

const la = new City("Los Angeles", {
    1910: 374000,
    1920: 682000,
    1930: 1617000,
    1940: 2268000,
    1950: 4250000,
    1960: 6805000,
    1970: 7984000,
    1980: 10841000,
    1990: 13522000,
    2000: 14661000,
    2010: 15750000,
    2020: 17740000,
}, [-118.2437, 34.0522], "Global capital of film and television, along with leading many other industries.");

const sf = new City ("Bay Area",{
    1860: 57000,
    1870: 151000,
    1880: 236000,
    1890: 302000,
    1900: 375000,
    1910: 604000,
    1920: 771000,
    1930: 996000,
    1940: 1156000,
    1950: 2131000,
    1960: 2607000,
    1970: 3049000,
    1980: 4185000,
    1990: 5386000,
    2000: 5973000,
    2010: 6828000,
    2020: 7530000,
},[-122.4194, 37.7749], "Home to Silicon Valley and the heart of the global technology industry.");


const dallas = new City ("Dallas",{
    1950: 855000,
    1960: 1435000,
    1970: 2016000,
    1980: 2713000,
    1990: 3265000,
    2000: 4445000,
    2010: 5685000,
    2020: 6884000,
},[-96.7969, 32.7767], "Its high-capacity airport and pro-business environment have led to more investment and more people.")

const houston = new City ("Houston",{
    1940: 471000,
    1950: 701000,
    1960: 1140000,
    1970: 1678000,
    1980: 2757000,
    1990: 3088000,
    2000: 4063000,
    2010: 5382000,
    2020: 6499000,
},[-95.3698, 29.7604], "A global center for the oil and gas industry, the city is highly specialized in the energy sector." )

const philly = new City ("Philadelphia",{
    1790: 44100,
    1800: 61600,
    1810: 87300,
    1820: 109000,
    1830: 161000,
    1840: 259000,
    1850: 405000,    
    1860: 608000,
    1870: 747000,
    1880: 949000,
    1890: 1180000,
    1900: 1454000,
    1910: 1746000,
    1920: 2072000,
    1930: 2264000,
    1940: 2538000,
    1950: 3297000,
    1960: 3989000,
    1970: 4419000,
    1980: 4830000,
    1990: 4970000,
    2000: 5418000,
    2010: 6003000,
    2020: 6268000,
},[-75.1652, 39.9526], "The nation's temporary capital, it was a hub for trade and finance." )

const miami = new City ("Miami",{
    1960: 1173000,
    1970: 1834000,
    1980: 2616000,
    1990: 3948000,
    2000: 4919000,
    2010: 5513000,
    2020: 6078000,
},[-80.1918, 25.7617], "Latin American immigration (~43% of the population speaks Spanish at home) combined with strong economic growth." )

const atlanta = new City ("Atlanta",{
    1970: 1172000,
    1980: 1613000,
    1990: 2158000,
    2000: 3500000,
    2010: 4743000,
    2020: 5431000,
},[-84.3880, 33.7490], "Investing in Hartsfield-Jackson Airport (now the world's busiest airport) attracted people and corporate investment." )

const dc = new City ("Washington D.C.",{
    1800: 11200,
    1810: 20400,
    1820: 28800,
    1830: 35500,
    1840: 50200,
    1850: 67000, 
    1860: 80000,
    1870: 123000,
    1880: 164000,
    1890: 253000,
    1900: 302000,
    1910: 357000,
    1920: 467000,
    1930: 527000,
    1940: 800000,
    1950: 1287000,
    1960: 1905000,
    1970: 2671000,
    1980: 2912000,
    1990: 3363000,
    2000: 3934000,
    2010: 4697000,
    2020: 5356000,
},[-77.0369, 38.9072], "Becoming the capital led to a boom in construction." )

const boston = new City ("Boston",{
    1790: 18300,
    1800: 24900,
    1810: 38700,
    1820: 54000,
    1830: 85600,
    1840: 183000,
    1850: 308000, 
    1860: 374000,
    1870: 501000,
    1880: 658000,
    1890: 818000,
    1900: 1009000,
    1910: 1213000,
    1920: 1366000,
    1930: 1479000,
    1940: 1746000,
    1950: 2301000,
    1960: 2501000,
    1970: 2703000,
    1980: 3064000,
    1990: 3355000,
    2000: 4032000,
    2010: 4407000,
    2020: 4640000,
},[-71.0589, 42.3601], "Major manufacturing hub for clothing, shipbuilding, and book publishing." )

const phoenix = new City ("Phoenix",{
    1980: 1409000,
    1990: 2006000,
    2000: 2975000,
    2010: 3863000,
    2020: 4475000,
},[-112.0740, 33.4484], "A combination of low costs and air conditioning helped this desert city boom." )

const detroit = new City ("Detroit",{
    1840: 21200,
    1850: 38000, 
    1860: 59000,
    1870: 101000,
    1880: 147000,
    1890: 237000,
    1900: 321000,
    1910: 503000,
    1920: 1071000,
    1930: 1721000,
    1940: 2041000,
    1950: 2884000,
    1960: 3750000,
    1970: 4085000,
    1980: 4214000,
    1990: 3648000,
    2000: 3903000,
    2010: 4160000,
    2020: 4298000,
},[-83.0458, 42.3314], "Cradle of the global automobile industry." )

const seattle = new City ("Seattle",{
    1920: 334000,
    1930: 390000,
    1940: 451000,
    1970: 1238000,
    1980: 1392000,
    1990: 2354000,
    2000: 3018000,
    2010: 3446000,
    2020: 4003000,
},[-122.3321, 47.6062], "Leader in aerospace and America's emerging software sector." )

const denver = new City ("Denver",{
    2000: 2231000,
    2010: 2716000,
    2020: 3167000,
},[-104.9903, 39.7392], "Outdoor lifestyles drew workers and industry." )

const sd = new City ("San Diego",{
    1970: 1198000,
    1980: 1704000,
    1990: 2348000,
    2000: 2674000,
    2010: 2985000,
    2020: 3152000,
},[-117.1611, 32.7157], "A port city with a major military presence and aerospace industry." )

const minneapolis = new City ("Minneapolis",{
    1880: 94000,
    1890: 305000,
    1900: 374000,
    1910: 526000,
    1920: 626000,
    1930: 753000,
    1940: 886000,
    1950: 987000,
    1960: 1377000,
    1970: 1701000,
    1980: 1788000,
    1990: 2080000,
    2000: 2389000,
    2010: 2651000,
    2020: 2968000,
},[-93.2650, 44.9778], "Known as 'Mill City', it thrived as a wheat processing town." )

const tampa = new City ("Tampa,",{
    1990: 1709000,
    2000: 2062000,
    2010: 2442000,
    2020: 2783000,
},[-82.4572, 27.9506], "Major port and tourism hub." )

const baltimore = new City ("Baltimore",{
    1790: 13500,
    1800: 26500,
    1810: 46600,
    1820: 62700,
    1830: 80600,
    1840: 110000,
    1850: 179000, 
    1860: 221000,
    1870: 283000,
    1880: 353000,
    1890: 453000,
    1900: 532000,
    1910: 589000,
    1920: 753000,
    1930: 836000,
    1940: 992000,
    1950: 1162000,
    1960: 1419000,
    1970: 1580000,
    1980: 1755000,
    1990: 1890000,
    2000: 2389000,
    2010: 2497000,
    2020: 2531000,
},[-76.6122, 39.2904], "A vital port for trade and shipbuilding, as well as a major steel manufacturer." )

const cleveland = new City ("Cleveland",{
    1860: 49000,
    1870: 101000,
    1880: 169000,
    1890: 274000,
    1900: 396000,
    1910: 580000,
    1920: 834000,
    1930: 976000,
    1940: 1079000,
    1950: 1425000,
    1960: 1785000,
    1970: 1960000,
    1980: 1752000,
    2020: 2506000,
},[-81.6944, 41.4993], "A major center for steel and chemical manufacturing." )

const stLouis = new City ("St. Louis",{
    1840: 28400,
    1850: 95000, 
    1860: 176000,
    1870: 345000,
    1880: 386000,
    1890: 490000,
    1900: 626000,
    1910: 760000,
    1920: 859000,
    1930: 950000,
    1940: 1102000,
    1950: 1541000,
    1960: 1864000,
    1970: 2123000,
    1980: 1849000,
    1990: 1947000,
    2000: 2078000,
    2010: 2246000,
},[-90.1994, 38.6270], "An inland port on the Mississippi, the city became a major food processing hub, especially for beer." )

const pittsburgh = new City ("Pittsburgh",{
    1820: 7300,
    1830: 15400,
    1840: 43700,
    1850: 86000, 
    1860: 93000,
    1870: 170000,
    1880: 265000,
    1890: 396000,
    1900: 532000,
    1910: 655000,
    1920: 775000,
    1930: 960000,
    1940: 1134000,
    1950: 1400000,
    1960: 2105000,
    1970: 2124000,
    1980: 1810000,
    1990: 1744000,
},[-79.9959, 40.4406], "Produced half of America's steel." )

const milwaukee = new City ("Milwaukee",{
    1860: 48000,
    1870: 75000,
    1880: 121000,
    1890: 212000,
    1900: 296000,
    1910: 389000,
    1920: 478000,
    1930: 615000,
    1940: 705000,
    1950: 829000,
    1960: 1150000,
    1970: 1252000,
},[-87.9065, 43.0389], "The nation's brewing hub, home to Pabst, Schlitz, Blatz, and Miller." )

const buffalo = new City ("Buffalo",{
    1830: 8700,
    1840: 29300,
    1850: 80000, 
    1860: 90000,
    1870: 133000,
    1880: 171000,
    1890: 272000,
    1900: 373000,
    1910: 420000,
    1920: 539000,
    1930: 620000,
    1940: 708000,
    1950: 895000,
    1960: 1054000,
},[-78.8784, 42.8864], "At the end of the Erie Canal, refined grain from the Midwest for the East Coast." )

const cincinnati = new City ("Cincinnati",{
    1820: 9600,
    1830: 24800,
    1840: 54800,
    1850: 133000, 
    1860: 192000,
    1870: 257000,
    1880: 307000,
    1890: 344000,
    1900: 379000,
    1910: 425000,
    1920: 470000,
    1930: 580000,
    1940: 559000,
    1950: 813000,
    1960: 994000,
},[-84.5120, 39.1031], "Known as 'Porkopolis', the city was America's pork-processing hub." )

const ks = new City ("Kansas City",{
    1890: 165000,
    1900: 242000,
    1910: 357000,
    1920: 455000,
    1930: 561000,
    1940: 632000,
    1950: 698000,
    1960: 921000,
},[-94.5786, 39.0997], "Major meatpacking and transportation hub." )

const nola = new City ("New Orleans",{
    1810: 17200,
    1820: 27200,
    1830: 46100,
    1840: 105000,
    1850: 123000, 
    1860: 172000,
    1870: 196000,
    1880: 219000,
    1890: 245000,
    1900: 291000,
    1910: 344000,
    1920: 393000,
    1930: 469000,
    1940: 557000,
    1950: 660000,
},[-90.0715, 29.9511], "Crucial port connecting the Mississippi and the Gulf." )

const indianapolis = new City ("Indianapolis",{
    1920: 379000,
    1930: 323000,
},[-86.1581, 39.7684], "Railway hub at the center of Indiana and close to other major cities." )

const providence = new City ("Providence",{
    1790: 6400,
    1800: 7600,
    1810: 10100,
    1820: 11800,
    1830: 22400,
    1840: 40900,
    1850: 65000, 
    1860: 69000,
    1870: 101000,
    1880: 128000,
    1890: 163000,
    1900: 243000,
    1910: 274000,
},[-71.4128, 41.8240], "Hub for shipping and skilled artisans, especially in jewelry and silversmithing." )

const albany = new City ("Albany",{
    1790: 3500,
    1800: 5300,
    1810: 10800,
    1820: 17900,
    1830: 35800,
    1840: 72000,
    1850: 107000, 
    1860: 116000,
    1870: 157000,
    1880: 178000,
    1890: 189000,
    1900: 188000,
    1910: 283000,
},[-73.7562, 42.6526], "A connecting node between the Atlantic and Great Lakes on the Erie Canal, allowing it to trade timber, wheat, furs, and manufactured goods." )

const louisville = new City ("Louisville",{
    1830: 10300,
    1840: 34200,
    1850: 61000, 
    1860: 88000,
    1870: 129000,
    1880: 143000,
    1890: 183000,
    1900: 227000,
},[-85.7585, 38.2527], "Based on the Falls of the Ohio, which forced ships to unload their goods, making it a natural port city." )

const rochester = new City ("Rochester",{
    1830: 9200,
    1840: 31400,
    1850: 49000, 
    1860: 56000,
    1870: 73000,
    1880: 103000,
},[-77.6109, 43.1610], "Major grain processing hub, largely due to waterpower from the Genesee River." )

const nh = new City ("New Haven",{
    1790: 4500,
    1810: 5800,
    1820: 7200,
    1830: 10200,
    1840: 21900,
    1870: 65000,
},[-72.9279, 41.3083], "Exporter of agricultural products and importer of European-manufactured goods." )

const portland = new City ("Portland",{
    1810: 7200,
    1820: 8600,
    1830: 12600,
    1840: 28600,
    1850: 36000, 
},[-70.2553, 43.6615], "Exported fish, timber, and ships." )

const syracuse = new City ("Syracuse",{
    1850: 38000, 
},[-76.1474, 43.0481], "Major producer of salt for the nation." )

const nb = new City ("New Bedford",{
    1840: 24100, 
},[-70.9342, 41.6362], "A global leader in whaling, immortalized in Herman Melville's Moby-Dick.  " )

const newark = new City ("Newark",{
    1830: 14400,
    1840: 29800,
    1850: 57000, 
    1860: 103000,
},[-74.1724, 40.7357], "Specialized manufacturing hub, particularly in leather and jewelry." )

const nantucket = new City ("Nantucket",{
    1790: 4600,
    1800: 5600,
    1810: 6800,
    1820: 7300,
},[-70.0995, 41.2835], "The nation's leading whaling port." )

const hartford = new City ("Hartford",{
    1790: 2700,
},[-72.6851, 41.7658], "A nascent insurance center, as well as hosting a robust artisan class." )

const richmond = new City ("Richmond",{
    1790: 3800,
    1800: 5700,
    1810: 9700,
    1820: 12100,
    1830: 16100,
},[-77.4360, 37.5407], "Major tobacco processing hub, along with other food processing." )

const norfolk = new City ("Norfolk",{
    1790: 3000,
    1800: 6900,
    1810: 9200,
    1820: 8500,
    1830: 9800,
},[-76.2859, 36.8508], "Chesapeake Bay port exporting Southern agriculture." )

const charleston = new City ("Charleston",{
    1790: 16400,
    1800: 18800,
    1810: 24700,
    1820: 24800,
    1830: 30300,
    1840: 42600,
    1850: 50000, 
},[-79.9311, 32.7765], "The South's main port, importing enslaved Africans and exporting cash crops. " )

const salem = new City ("Salem",{
    1790: 13600,
    1800: 14700,
    1810: 23100,
    1820: 22600,
    1830: 27300,
},[-70.8967, 42.5195], "A port that traded extensively with Asia." )

const newport = new City ("Newport",{
    1790: 6700,
    1800: 6700,
    1810: 7900,
    1820: 7300,
},[-71.3128, 41.4901], "A port for distilling rum and a center for privateers. " )

const gloucester = new City ("Gloucester",{
    1790: 5300,
    1800: 5300,
    1810: 5900,
},[-70.6653, 42.6159], "Port town skilled at deep-sea fishing and salting cod." )

const newburyport = new City ("Newburyport",{
    1790: 4800,
    1800: 6000,
    1810: 7600,
},[-70.8770, 42.8126], "Major fishing and trading port." )

const portsmouth = new City ("Portsmouth",{
    1790: 4700,
    1800: 6000,
    1810: 7600,
    1820: 7300,
},[-70.8233, 43.0718], "A port city, with specialities in shipbuilding and lumber." )

const middleborough = new City ("Middleborough",{
    1790: 4500,
    1800: 4500,
},[-70.9401, 41.9118], "Proximity to iron deposits made it a center for tool production for New England." )

const alexandria = new City ("Alexandria",{
    1790: 2800,
},[-77.0469, 38.8048], "A major port city, it became a suburb of Washington, DC after it became the capital." )

const petersburg = new City ("Petersburg",{
    1790: 2800,
},[-77.4019, 37.2279], "Hub for textile production and tobacco manufacturing." )

const savannah = new City ("Savannah",{
    1800: 5200,
    1820: 7500,
},[-81.0998, 32.0809], "A port town exporting cotton and rice." )

const nl = new City ("New London",{
    1800: 5200,
},[-72.0995, 41.3557], "A major port for whaling and rum." )

const schenectady = new City ("Schenectady",{
    1800: 5300,
    1810: 5900,
},[-73.9201, 42.8142], "Transportation improvements along the Mohawk River made the city a natural gateway to the west for settlers." )

// State admission years (FIPS -> Year)
