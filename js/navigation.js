// Navigation variables
let restaurants = [];
let bars = [];
let clubs = ["jadore", "suita", "nhaos", "casper", "aigli", "pili axiou"];

// Temp
for (let i = 1; i < 5; i++) {
    restaurants.push(`restaurant ${i}`);
}
for (let i = 1; i < 6; i++) {
    bars.push(`bar ${i}`);
}


// Dropdown content
const dropdowns = document.querySelectorAll(".dropdowns");

// When the user hovers over a menu display the correct content
dropdowns.forEach(dropdown => {
    const dropdownDiv = dropdown.querySelector(".dropdown-div");

    // On hover
    dropdown.addEventListener('mouseover', function(){
        dropdownDiv.style.display = "block";
    });
                
    // Display and hide the menu on and out of hover
    dropdown.addEventListener('mouseout', function(){
        dropdownDiv.style.display = "none";
    });

    // Dynamically add the content to the menu
    const menu = dropdown.querySelector(".dropdown-menu");        
    let data = dropdown.dataset;
    let dropdownInfo;
    // Find the dropdown the user hovers
    switch(data.name) {
        case "restaurants":
            dropdownInfo = restaurants;
            break;
        case "bars":
            dropdownInfo = bars;
            break;
        case "clubs":
            dropdownInfo = clubs;
            break;
        default:
            dropdownInfo = [""];
        }

        // Clear before adding content
        menu.textContent = "";
        dropdownContent(menu, dropdownInfo);
});

// Dropdown menu rules
const dropdownDivs = document.querySelectorAll(".dropdown-div");
dropdownDivs.forEach(div => {
    div.addEventListener('mouseover', function(){
        div.style.display = "block";
    });

    div.addEventListener('click', function(){
        div.style.display = "none";
    });

    div.addEventListener('mouseout', function(){
        div.style.display = "none";
    });
});


// Burger menu
const burgerMenu = document.querySelector("#burger-menu");
const burgerBars = document.querySelectorAll(".burger-bars");
burgerMenu.addEventListener('click', function(){
    burgerBars.forEach(bar => bar.classList.toggle('clicked'));
});

// Add the content when a dropdown is hovered
function dropdownContent(menu, dropdownInfo) {
    dropdownInfo.forEach(content => {
        menu.innerHTML += `<li class="dropdown-menu-li">${content}</li>`;
    });
}