const logo = document.querySelector(".logo");
const container = document.querySelector(".logo-container");
const gl = document.querySelector(".gl")
const office = document.querySelector(".office")
const nav = document.querySelector(".nav")
const doc = document.querySelector(".doc")
const ecoled = document.querySelector(".ecoledirecte")

const timeline = new TimelineMax();

if (window.matchMedia("(orientation: portrait)").matches) {
    timeline.fromTo(gl, 2, { x: -1000 }, { x: 0, ease: Power4.easeInOut });
    timeline.fromTo(ecoled, 2, { x: -1000 }, { x: 0, ease: Power4.easeInOut }, "-=2");
    timeline.fromTo(office, 2, { x: -1000 }, { x: 0, ease: Power4.easeInOut }, "-=1.5");
    timeline.fromTo(doc, 2, { x: -1000 }, { x: 0, ease: Power4.easeInOut }, "-=2");
    timeline.fromTo(nav, 2, { x: -1000 }, { x: 0, ease: Power4.easeInOut }, "-=1.5");
} else {
    timeline.fromTo(gl, 2, { y: -500 }, { y: 0, ease: Power4.easeInOut });
    timeline.fromTo(ecoled, 2, { y: -500 }, { y: 0, ease: Power4.easeInOut }, "-=2");
    timeline.fromTo(office, 2, { y: -500 }, { y: 0, ease: Power4.easeInOut }, "-=1.5");
    timeline.fromTo(doc, 2, { y: -500 }, { y: 0, ease: Power4.easeInOut }, "-=2");
    timeline.fromTo(nav, 2, { y: -1500 }, { y: 0, ease: Power4.easeInOut }, "-=1.5");
}

const videoElement = document.querySelector(".lazy-load-video");

function lazyLoadVideo(videoElement) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyVideo = entry.target;
                const videoSource = lazyVideo.getAttribute("data-src");
                lazyVideo.src = videoSource;
                lazyVideo.load();
                observer.unobserve(lazyVideo);
            }
        });
    });

    observer.observe(videoElement);
}

function randomPos(id) {
    console.log("Un secret est caché dans une position aléatoire du site.")
    var random = Math.floor(Math.random() * 100);
    var random2 = Math.floor(Math.random() * 100);
    document.getElementById(id).style.cssText = "position: absolute;";
    document.getElementById(id).style.top = random + "%";
    document.getElementById(id).style.left = random2 + "%";
    random1sqrt = Math.sqrt(random)
    random2sqrt = Math.sqrt(random2)
    console.log("Position: " + random1sqrt + "%, " + random2sqrt + "%");
}

const countdown = new Date("Sep 1, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown-days").innerHTML = days;
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes;
    document.getElementById("countdown-seconds").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-days").innerHTML = "0";
        document.getElementById("countdown-hours").innerHTML = "0";
        document.getElementById("countdown-minutes").innerHTML = "0";
        document.getElementById("countdown-seconds").innerHTML = "0";
    }
}, 10);

randomPos("randomPos")

lazyLoadVideo(videoElement);
