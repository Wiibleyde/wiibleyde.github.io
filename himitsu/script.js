(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "06/24/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        document.getElementById("headline").innerText = "Himitsu arrive très bientôt !";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("background").style.backgroundImage = "url(./newbg.jpg)";
        document.getElementById("background").style.backgroundSize = "cover";
        clearInterval(x);
      } else {
        document.getElementById("headline").innerText = "Temps avant l'arrivée d'Himitsu";
        document.getElementById("background").style.backgroundImage = "url(./himitsu.jpg)";
        document.getElementById("background").style.backgroundSize = "cover";
      }
    }, 0)
}());