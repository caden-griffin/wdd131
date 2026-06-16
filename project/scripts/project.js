const trails = [
    {
        name: "Donut Falls",
        location: "Big Cottonwood Canyon",
        distance: 3.5,
        difficulty: "Easy",
        image: "images/donut-falls.jpg"
    },
    {
        name: "Mount Timpanogos Trail",
        location: "American Fork Canyon",
        distance: 14.2,
        difficulty: "Hard",
        image: "https://picsum.photos/id/1016/600/400"
    },
    {
        name: "Stewart Falls",
        location: "Sundance",
        distance: 3.4,
        difficulty: "Moderate",
        image: "https://picsum.photos/id/1043/600/400"
    },
    {
        name: "Cecret Lake",
        location: "Little Cottonwood Canyon",
        distance: 1.8,
        difficulty: "Easy",
        image: "https://picsum.photos/id/1050/600/400"
    },
    {
        name: "Bell Canyon Reservoir",
        location: "Sandy",
        distance: 4.6,
        difficulty: "Moderate",
        image: "https://picsum.photos/id/1036/600/400"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    
    if (document.getElementById("trail-grid")) {
        initDirectory();
    }
    
    if (document.getElementById("trail-form")) {
        initForm();
    }
});

function initNavigation() {
    const toggleBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");
    
    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

function initDirectory() {
    const grid = document.getElementById("trail-grid");
    
    updateViewsCounter();
    renderTrails(trails, grid);
    
    radioButtons.forEach(radio => {
        radio.addEventListener("change", (e) => {
            const selectedDifficulty = e.target.value;
            if (selectedDifficulty === "all") {
                renderTrails(trails, grid);
            } else {
                const filtered = trails.filter(trail => trail.difficulty === selectedDifficulty);
                renderTrails(filtered, grid);
            }
        });
    });
}

function renderTrails(items, container) {
    container.innerHTML = "";
    
    items.forEach(trail => {
        const card = document.createElement("article");
        card.className = "trail-card";
        
        card.innerHTML = `
            <img src="${trail.image}" alt="${trail.name} scenic trail route view" loading="lazy">
            <div class="card-content">
                <span class="badge ${trail.difficulty.toLowerCase()}">${trail.difficulty}</span>
                <h3>${trail.name}</h3>
                <p>Location: ${trail.location}</p>
                <p>Distance: ${trail.distance} miles</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function updateViewsCounter() {
    const counterDisplay = document.getElementById("view-count");
    let count = parseInt(localStorage.getItem("trailFinderViews")) || 0;
    count++;
    localStorage.setItem("trailFinderViews", count);
    counterDisplay.textContent = count;
}

function initForm() {
    const form = document.getElementById("trail-form");
    const feedback = document.getElementById("form-feedback-message");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newTrail = {
            name: document.getElementById("trail-name").value,
            location: document.getElementById("trail-location").value,
            distance: parseFloat(document.getElementById("trail-distance").value),
            difficulty: document.getElementById("trail-difficulty").value
        };
        
        let customTrails = JSON.parse(localStorage.getItem("userSuggestedTrails")) || [];
        customTrails.push(newTrail);
        localStorage.setItem("userSuggestedTrails", JSON.stringify(customTrails));
        
        feedback.textContent = `Success! Thank you for suggesting ${newTrail.name}.`;
        feedback.style.color = "#2D5A27";
        
        form.reset();
    });
}