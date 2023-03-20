const logo = document.querySelector(".logo");
const container = document.querySelector(".logo-container");
const gl = document.querySelector(".gl")
const office = document.querySelector(".office")
const nav = document.querySelector(".nav")
const doc = document.querySelector(".doc")
const ecoled = document.querySelector(".ecoledirecte")


const timeline = new TimelineMax();

if (window.matchMedia("(orientation: portrait)").matches) {
    timeline.fromTo(gl,2, {x: -1000}, {x: 0, ease: Power4.easeInOut});
    timeline.fromTo(ecoled,2, {x: -1000}, {x: 0, ease: Power4.easeInOut}, "-=2");
    timeline.fromTo(office,2, {x: -1000}, {x: 0, ease: Power4.easeInOut}, "-=1.5");
    timeline.fromTo(doc,2, {x: -1000}, {x: 0, ease: Power4.easeInOut}, "-=2");
    timeline.fromTo(nav,2, {x: -1000}, {x: 0, ease: Power4.easeInOut}, "-=1.5");
  } else {
    timeline.fromTo(gl,2, {y: -500}, {y: 0, ease: Power4.easeInOut});
    timeline.fromTo(ecoled,2, {y: -500}, {y: 0, ease: Power4.easeInOut}, "-=2");
    timeline.fromTo(office,2, {y: -500}, {y: 0, ease: Power4.easeInOut}, "-=1.5");
    timeline.fromTo(doc,2, {y: -500}, {y: 0, ease: Power4.easeInOut}, "-=2");
    timeline.fromTo(nav,2, {y: -1500}, {y: 0, ease: Power4.easeInOut}, "-=1.5");
  }



