console.log('What are you doing? Looking for secrets? Don’t stick your nose where it doesn\'t belong. Or you might find something you DON’T like... Hee hee hee.');
var date=new Date();
var month=date.getMonth();
var day=date.getDate();
let div = document.getElementById('splash');
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (document.cookie != "") return;
    if (event.matches) {
        changethemetodark();
    }
    else changethemetolight();
});
if (document.cookie == "darkmode=true" && getComputedStyle(document.querySelector(":root")).getPropertyValue("--text") == "#000") {
    changethemetodark();
}
else if (document.cookie == "darkmode=false" && getComputedStyle(document.querySelector(":root")).getPropertyValue("--text") == "#fff") {
    changethemetolight();
}
/*Check date and generate splash*/
if (month==11) { /*December*/
    if (day==18) {
        div.innerHTML='Happy Birthday Nemu!';
    }
    else if (day==25) {
        div.innerHTML='Merry Christmas!';
    }
    else if (day==31) {
        div.innerHTML='Happy New Year\'s Eve!';
    }
}
else if (month==6) { /*July*/
    if (day==25) {
        div.innerHTML='Happy Birthday Nick!';
    }
    else if (day==8) {
        div.innerHTML='Happy Birthday Mom!';
    }
}
else if (month==5) { /*June*/
    if (day==23) {
        div.innerHTML='Happy Birthday Sonic!';
    }
    else if (day==3) {
        div.innerHTML='Happy Birthday Sega!';
    }
    else if (day==19) {
        div.innerHTML='Happy Birthday X11!'
    }
}
else if (month==0) { /*January*/
    if (day==1) {
        div.innerHTML='Happy New Year!';
    }
}
else if (month==4) { /*May*/
    if (day==7) {
        div.innerHTML='Happy Birthday Sony!';
    }
}
else if (month==10) { /*November*/
    if (day==20) {
        div.innerHTML='Happy Birthday Windows!';
    }
}
else if (month==7) { /*August*/
    if (day==28) {
        div.innerHTML='Happy Birthday Cassettes!';
    }
}
else if (month==8) { /*September*/
    if (day==11) {
        div.innerHTML='Never Forget!';
    }
    if (day==29) {
        div.innerHTML='Happy Birthday Nana!';
    }
    if (day==6) {
        div.innerHTML='Happy Birthday Sabrina!';
    }
}
else if (month==9) { /*October*/
    if (day==25) {
        div.innerHTML='Happy Birthday Word!';
    }
    if (day==31) {
        div.innerHTML='Happy Halloween!';
    }
}

/*Play sound when changing themes*/
function clicksound() {
    document.getElementById("click").play();
}
/*Do a barrel roll!*/
function spin() {
    if (document.getElementById("html").classList.contains("roll")) return;
    document.getElementById("html").classList.add("roll");
    setTimeout(function() {
        document.getElementById("html").classList.remove("roll");
    }, 4000);
}
/*Change themes*/
function changetheme() {
    var currentTheme = document.getElementById('style');
    var click = document.createElement("audio");
    click.setAttribute("id", "click");
    click.setAttribute("src", "/swf/audio/click.mp3");
    click.setAttribute("autoplay", "true");
    click.setAttribute("onended", "this.remove()");
    document.body.appendChild(click);
    if (getComputedStyle(document.querySelector(":root")).getPropertyValue("--text") == "#fff") {
        currentTheme.innerHTML = '<link rel=stylesheet href="/swf/css/light.css">';
        document.cookie = "darkmode=false; expires=" + new Date(new Date().getTime() + 604800000).toUTCString();
    }
    else {
        currentTheme.innerHTML = '<link rel=stylesheet href="/swf/css/dark.css">';
        document.cookie = "darkmode=true; expires=" + new Date(new Date().getTime() + 604800000).toUTCString();
    }
}
function changethemetolight() {
    var currentTheme = document.getElementById('style');
    currentTheme.innerHTML = '<link rel=stylesheet href="/swf/css/light.css">';
}
function changethemetodark() {
    var currentTheme = document.getElementById('style');
    currentTheme.innerHTML = '<link rel=stylesheet href="/swf/css/dark.css">';
}
/*"Developer" mode*/
const dev = document.getElementById('dev');
const button = document.getElementById('ver');
var clicktxt = ['You are 1 step away from becoming a developer!', 'You are now a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="smallwhitelink">Developer mode</a>.', 'No need, you\'re already a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="smallwhitelink">Developer mode</a>.']
var clickcount = 5;
function oneclick() {
    if (clickcount > 2) {dev.innerHTML = "You are " + String(clickcount - 1) + " steps away from becoming a developer!"}
    else if (clickcount > 1) {dev.innerHTML = clicktxt[0]}
    else if (clickcount > 0) {dev.innerHTML = clicktxt[1]}
    else if (clickcount <= 0) {dev.innerHTML = clicktxt[2]}
    clickcount--;
}
