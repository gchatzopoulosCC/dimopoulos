// Mitsakas

// Show more/less reviews
const showMoreButton = document.querySelector(".show-more-button");
const showMoreReviewDiv = document.querySelector(".reviews-div.more")

showMoreButton.onclick = function() {
    // Change add/remove the class to show or hide the div
    showMoreReviewDiv.classList.toggle("active");

    // Change the button text
    if (showMoreButton.value == "more") {
        showMoreButton.innerHTML = "Show less"
        showMoreButton.value = "less";
    } else {
        showMoreButton.innerHTML = "Show more"
        showMoreButton.value = "more";
    }
}