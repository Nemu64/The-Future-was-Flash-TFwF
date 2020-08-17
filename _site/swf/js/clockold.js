function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date = today.getDate();
    var y = today.getFullYear();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = months[today.getMonth()];
    h = checkTime2(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + pm + ', ' + month + ' ' + date + ', ' + y;
    var t = setTimeout(clock, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }  function checkTime2(h) {
    if (h <= 12) {pm = ' AM'};
    if (h > 12) {h=h-12, pm=' PM'};
    return h;
  }