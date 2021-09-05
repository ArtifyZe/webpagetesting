var GfCountdown = new Date("Sep 6, 2021 00:00:00").getTime();

var gf = setInterval(function() {
    var now = new Date().getTime();
    var distance = GfCountdown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("gf").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(gf);
        document.getElementById("gf").innerHTML = "0d 0h 0m 0s";
    }
}, 1000);