// Dropdown content
const dropdowns = document.querySelectorAll(".dropdowns");

// When the user hovers over a menu display the correct content
dropdowns.forEach(dropdown => {
    const dropdownDiv = dropdown.querySelector(".dropdown-div");
    console.log(dropdownDiv)
    // On hover
    dropdown.addEventListener('mouseover', function(){
        dropdownDiv.style.display = "block";
    });
                
    // Display and hide the menu on and out of hover
    dropdown.addEventListener('mouseout', function(){
        dropdownDiv.style.display = "none";
    });
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