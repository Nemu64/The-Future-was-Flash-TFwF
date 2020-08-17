function clock() {
  var d = new Date();          
  var n = d.toLocaleString([], { hour12: true});
  document.getElementById("clock").innerHTML = n;
  setInterval(clock, 500)
}