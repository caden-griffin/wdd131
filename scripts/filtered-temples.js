const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
{
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
{
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    templeName: "Saratoga Springs Utah",
    location: "Saratoga Springs, Utah, United States",
    dedicated: "2023, August, 13",
    area: 97000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg"
  }
];

const container = document.getElementById("temple-container");
const filterHeading = document.querySelector("main h2");

function displayTemples(filteredTemples) {
  container.innerHTML = ""; // Clear existing elements
  
  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");
    card.className = "temple-card";

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;
    
    container.appendChild(card);
  });
}

document.getElementById("home").addEventListener("click", () => {
  filterHeading.textContent = "Home";
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  filterHeading.textContent = "Old (Built before 1900)";
  // Grab the year out of the dedication string
  const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
  filterHeading.textContent = "New (Built after 2000)";
  const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
  filterHeading.textContent = "Large (> 90,000 sq ft)";
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
  filterHeading.textContent = "Small (< 10,000 sq ft)";
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

displayTemples(temples);