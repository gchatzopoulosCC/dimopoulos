// Navigation variables
const restaurants = [];
const restaurants_hrefs = ['#', "#", '#', '#', '#']
const bars = [];
const bars_hrefs = ['#', "#", '#', '#', '#', '#']
const clubs = ["jadore", "suita", "nhaos", "casper", "aigli", "pili axiou"];
const clubs_hrefs = ['#', '#', "#", '#', '#', '#']

// Temp
for (let i = 1; i <= restaurants_hrefs.length; i++) {
    restaurants.push(`restaurant ${i}`);
}
for (let i = 1; i <= clubs_hrefs.length; i++) {
    bars.push(`bar ${i}`);
}


// Dropdown content
const dropdowns = document.querySelectorAll(".dropdowns");

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
        menu.innerHTML = " ";
        dropdownContent(menu, dropdownInfo, hrefs);

        // Show and hide the menu using the buttons
        const btn = dropdown.querySelector('.dropdown-buttons');
        btn.onmouseover = function(){menu.classList.add('show');}
        btn.onmouseout = function(){menu.classList.remove('show');}
        
        btn.onclick = function(){menu.classList.toggle('show');}
        
        // Show and hide the menu when the user uses the menu
        menu.onmouseover = function(){menu.classList.add('show');}
        menu.onmouseout = function(){menu.classList.remove('show');}
});

// Burger menu
const burgerMenu = document.querySelector("#burger-menu");
const burgerBars = document.querySelectorAll(".burger-bars");
const navList = document.querySelector("#nav-list");
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

// Check if the user is on mobile device