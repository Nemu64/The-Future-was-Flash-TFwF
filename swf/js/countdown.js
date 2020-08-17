var countDownDate = new Date("Jan 1, 2021 0:0:0").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var msecs = Math.floor((distance % (1000 * 60)) / 1000 / 999);
    
  document.getElementById("countdown").innerHTML = days + "days " + hours + "hours "
  + minutes + "mins " + seconds + "secs " + msecs + "ms";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("coundown").innerHTML = "Adobe Flash has reached EOL :(";
  }
}, 1);