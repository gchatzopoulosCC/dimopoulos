// Kaltsios
/*create constant values (unchangeable)*/ 
const container = document.querySelector(".clubs-show-video-div");
const buttons = document.querySelectorAll(".carousel-buttons");
const videosCasper = ["Casper1.mp4", "Casper2.mp4", "Casper3.mp4"]
const videosPili = ["PiliAxiou1.mp4", "PiliAxiou2.mp4"];
const videosSuita = ["Suita1.mp4", "Suita2.mp4"];
const videosNhaos = ["NhaosSNOW.mp4", "Nhaos1.mp4", "Nhaos2.mp4" ];
/*create variables*/
let index = 0;
let videos = [];

/* Find the correct videos */
switch(container.id){
    case "pili-axiou":
        videos = videosPili;
        break;
    case "casper":
        videos = videosCasper;
        break;
    case "suita":
        videos = videosSuita;
        break;
    case "nhaos":
        videos = videosNhaos;
        break;    
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        switch(btn.dataset.action) {
            case "previous":
                // Check if there is a video before it if it is then go to the last one
                if (index <= 0) {
                    index = videos.length-1;
                } else {
                    index--;
                }
                break;
            case "next":
                // Check if the is a video after it if it is then go to the first one
                if (index >= videos.length-1) {
                    index = 0;
                } else {
                    index++;
                }
        }
        // Delete the previous video
        container.innerHTML = "";

        // Show the correct video
        showVideo(videos[index]);
    });
});

/* Chooses Video */
function showVideo(video) {
    container.innerHTML = `<video class="clubs-carousel-video" autoplay><source src="other/videos/clubs/` + video + `" type="video/mp4"></video>`
}

/* Load with the first video */
showVideo(videos[index]);

function bookingconfirmation() {
    confirm("Your booking has been made!");
}

const text = document.querySelector(".clubsmore");
var buttonMore = document.querySelector(".showmorebutton");

/* Show rest text when clicked */
buttonMore.addEventListener('click', ()=>{
    text.classList.toggle('more');    
    if (buttonMore.value == 'open'){ 
        buttonMore.innerHTML = "Show Less";
        buttonMore.value = 'close';
    } else {
        buttonMore.innerHTML = "Show More";
        buttonMore.value = 'open';
    }
})
