function scrollToDiv(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
}

function scrollFunction() {
    let btnScrollToTop = document.getElementById("btn-scroll-to-top")
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        btnScrollToTop.classList.remove("hidden")
        setTimeout(function(){ btnScrollToTop.style.opacity = "1" }, 10)
    } else {
        btnScrollToTop.style.opacity = "0"
        setTimeout(function(){ btnScrollToTop.classList.add("hidden") }, 300)
    }
}

window.onscroll = function() {scrollFunction()}

window.onscroll = function() {scrollFunction()}