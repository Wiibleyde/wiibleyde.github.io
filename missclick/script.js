function timer(year, month, day, hour, minute, second) {
    let targetDate = new Date(year, month - 1, day, hour, minute, second)
    let currentDate = new Date()
    let timeRemaining = targetDate - currentDate
    if (timeRemaining <= 0) {
        return true
    } else {
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
        document.getElementById('days').textContent = days
        document.getElementById('hours').textContent = hours
        document.getElementById('minutes').textContent = minutes
        document.getElementById('seconds').textContent = seconds
        return false
    }
}

function updateTimer() {
    let year = new Date().getFullYear()
    let month = 12
    let day = 22
    let hour = 0
    let minute = 0
    let second = 0

    let timerFinished = timer(year, month, day, hour, minute, second)

    if (timerFinished) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("cake").style.display = "block";
    } else {
        document.getElementById("cake").style.display = "none";
        setTimeout(updateTimer, 100)
    }
}

updateTimer()
