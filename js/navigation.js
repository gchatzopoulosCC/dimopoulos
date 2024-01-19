// Navigation variables
const restaurants = [];
const restaurants_hrefs = ['#', "#", '#', '#', '#']
const bars = ['shaka', "nohelia", 'maya bar', 'Gorilas', 'shark bar', 'sanaa Coast'];
const bars_hrefs = ['#', "#", '#', '#', '#'];
const clubs = ["jadore", "suita", "nhaos", "casper", "aigli", "pili axiou"];
const clubs_hrefs = ['#', '#', "#", '#', '#', '#']

// Temp
for (let i = 1; i <= restaurants_hrefs.length; i++) {
    restaurants.push(`restaurant ${i}`);
}


// Dropdown content
const dropdowns = document.querySelectorAll(".dropdown");

// When the user hovers over a menu display the correct content
dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown-menu");

    // Dynamically add the content to the menu       
    let data = dropdown.dataset;
    let dropdownInfo;
    let hrefs;
    // Find the dropdown the user hovers
    switch(data.name) {
        case "restaurants":
            dropdownInfo = restaurants;
            hrefs = restaurants_hrefs;
            break;
        case "bars":
            dropdownInfo = bars;
            hrefs = bars_hrefs;
            break;
        case "clubs":
            dropdownInfo = clubs;
            hrefs = clubs_hrefs;
            break;
        default:
            dropdownInfo = [""];
        }

    // Clear before adding content
    dropdownContent(menu, dropdownInfo, hrefs);

    // Show and hide the menu using the buttons
    const btn = dropdown.querySelector('.dropdown-button');
    // Desktop
    btn.addEventListener('mouseover', () => toggleMenu(menu, !isMobile()));
    btn.addEventListener('mouseout', () => toggleMenu(menu, false));

    // Mobile
    btn.addEventListener('click', () => {
        if (isMobile()) menu.classList.toggle("show");
    });
    
    // Show and hide the menu when the user uses the menu
    menu.addEventListener('mouseover', () => toggleMenu(menu, true));
    menu.addEventListener('mouseout', () => toggleMenu(menu, false));
});

// Burger menu
const burgerMenu = document.querySelector(".burger-menu");
const burgerBars = document.querySelectorAll(".burger-bar");
const navList = document.querySelector(".nav-list");
burgerMenu.onclick = function(){
    burgerBars.forEach(bar => bar.classList.toggle('clicked'));
    navList.classList.toggle('show');
};

// Add the content when a dropdown is hovered
function dropdownContent(menu, dropdownInfo, hrefs) {
    for (let i = 0; i < dropdownInfo.length; i++) {
        menu.innerHTML += `<li class="dropdown-menu-li"><a href="${hrefs[i]}">${dropdownInfo[i]}</a></li>`;
    }
}

// Hide or show the menu
function toggleMenu(menu, show) {
    if (show) {
        menu.classList.add("show");
    } else {
        menu.classList.remove("show");
    }
}

// Check if the user is on mobile device
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}