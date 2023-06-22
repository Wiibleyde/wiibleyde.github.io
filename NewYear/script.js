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
    let year = new Date().getFullYear() + 1
    let month = 1
    let day = 1
    let hour = 0
    let minute = 0
    let second = 0

    let timerFinished = timer(year, month, day, hour, minute, second)

    if (timerFinished) {
        document.getElementById("headline").innerText = "BONNE ANNÉE !";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("canvas").style.display = "block";
    } else {
        document.getElementById("canvas").style.display = "none";
        setTimeout(updateTimer, 100)
    }
}

$(function () {
    var canvas = $('#canvas')[0];
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    var ctx = canvas.getContext('2d');
    // resize
    $(window).on('resize', function () {
        canvas.width = $(window).width();
        canvas.height = $(window).height();
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
    // init
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // objects
    var listFire = [];
    var listFirework = [];
    var fireNumber = 10;
    var center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };
    var range = 100;
    for (var i = 0; i < fireNumber; i++) {
        var fire = {
            x: Math.random() * range / 2 - range / 4 + center.x,
            y: Math.random() * range * 2 + canvas.height,
            size: Math.random() + 0.5,
            fill: '#fd1',
            vx: Math.random() - 0.5,
            vy: -(Math.random() + 4),
            ax: Math.random() * 0.02 - 0.01,
            far: Math.random() * range + (center.y - range)
        };
        fire.base = {
            x: fire.x,
            y: fire.y,
            vx: fire.vx
        };
        //
        listFire.push(fire);
    }

    function randColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = 'rgb($r, $g, $b)';
        color = color.replace('$r', r);
        color = color.replace('$g', g);
        color = color.replace('$b', b);
        return color;
    }
    (function loop() {
        requestAnimationFrame(loop);
        update();
        draw();
    })();

    function update() {
        for (var i = 0; i < listFire.length; i++) {
            var fire = listFire[i];
            //
            if (fire.y <= fire.far) {
                // case add firework
                var color = randColor();
                for (var i = 0; i < fireNumber * 5; i++) {
                    var firework = {
                        x: fire.x,
                        y: fire.y,
                        size: Math.random() + 1.5,
                        fill: color,
                        vx: Math.random() * 5 - 2.5,
                        vy: Math.random() * -5 + 1.5,
                        ay: 0.05,
                        alpha: 1,
                        life: Math.round(Math.random() * range / 2) + range / 2
                    };
                    firework.base = {
                        life: firework.life,
                        size: firework.size
                    };
                    listFirework.push(firework);
                }
                // reset
                fire.y = fire.base.y;
                fire.x = fire.base.x;
                fire.vx = fire.base.vx;
                fire.ax = Math.random() * 0.02 - 0.01;
            }
            //
            fire.x += fire.vx;
            fire.y += fire.vy;
            fire.vx += fire.ax;
        }
        for (var i = listFirework.length - 1; i >= 0; i--) {
            var firework = listFirework[i];
            if (firework) {
                firework.x += firework.vx;
                firework.y += firework.vy;
                firework.vy += firework.ay;
                firework.alpha = firework.life / firework.base.life;
                firework.size = firework.alpha * firework.base.size;
                firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
                //
                firework.life--;
                if (firework.life <= 0) {
                    listFirework.splice(i, 1);
                }
            }
        }
    }

    function draw() {
        // clear
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // re-draw
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 1;
        for (var i = 0; i < listFire.length; i++) {
            var fire = listFire[i];
            ctx.beginPath();
            ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = fire.fill;
            ctx.fill();
        }
        for (var i = 0; i < listFirework.length; i++) {
            var firework = listFirework[i];
            ctx.globalAlpha = firework.alpha;
            ctx.beginPath();
            ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = firework.fill;
            ctx.fill();
        }
    }
})

updateTimer()