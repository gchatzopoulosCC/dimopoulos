// Colors
const white = "#E0F4FF";
const lightBlue = "#87C4FF";
const blue = "#39A7FF";
const beige = "FFEED9";

// Navigation variables
let restaurants = [];
let bars = [];
let clubs = [];

// Temp
for (let i = 1; i < 15; i++) {
    restaurants.push(`item ${i}`);
}
for (let i = 1; i < 12; i++) {
    bars.push(`item ${i}`);
}
for (let i = 1; i < 20; i++) {
    clubs.push(`items ${i}`);
}

document.addEventListener("DOMContentLoaded", function() {

    // Dropdown content
    const menu = document.querySelector("#dropdown-menu");
    const dropdowns = document.querySelectorAll(".dropdowns");
    const dropdownDiv = document.getElementById("dropdown-div")

    // When the user hovers over a menu display the correct content
    dropdowns.forEach(dropdown => {
        // On hover
        dropdown.addEventListener('mouseover', function(){
            dropdownDiv.style.display = "block";
            dropdown.style.color = lightBlue;
            let data = dropdown.dataset;
            let dropdownInfo;
            // Find the dropdown the user hovers
            switch(data.name){
                case "restaurants":
                    dropdownInfo = restaurants;
                    break;
                case "bars":
                    dropdownInfo = bars;
                    break;
                case "clubs":
                    dropdownInfo = clubs;
                }
                // Clear before adding content
                menu.innerHTML = " ";
                dropdownContent(menu, dropdownInfo);
        });
                    
        // Display and hide the menu on and out of hover
        dropdown.addEventListener('mouseout', function(){
            dropdownDiv.style.display = "none";
            dropdown.style.color = blue;
        });
                
        menu.addEventListener('mouseover', function(){
            dropdownDiv.style.display = "block";
        });
        
        menu.addEventListener('mouseout', function(){
            dropdownDiv.style.display = "none";
        });
    });

    // Burger menu
    const burgerMenu = document.querySelector("#burger-menu");
    const burgerBars = document.querySelectorAll(".burger-bars");
    burgerMenu.addEventListener('click', function(){
        burgerBars.forEach(bar => bar.classList.toggle('clicked'));
    });
});



function dropdownContent(menu, dropdownInfo) {
    dropdownInfo.forEach(content => {
        menu.innerHTML += `<li class="dropdown-menu-li">${content}</li>`;
    });
}