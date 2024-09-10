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
function splash(id) {
    const quotes = ['It\'s great!', 'I\'t finally here!', 'We\'ve got easter eggs!', 'Starites!', 'Here we go!', '88.6% JS free!', 'It\'s finished!', 'Made with ♥', 'We have cookies!', 'We don\'t need HTML5!', 'Milk\'s favorite cookie!', 'I simply love mangoes!', 'By the Mania, for the Mania!', 'sqrt(-1) love you!', 'Mind the gaps!', 'Held together by duct tape!', 'Built on NT Technology!', 'JIT compiled!', 'Always online!', '<span style="font-family: Sega, sans-serif;font-weight: normal;">To be this good takes AGES</span>', 'At least 3 lines of code!', 'Spared no expense!', 'The sky is the limit!', '& Knuckles!', 'Now on floppy!', '<div onclick="spin()">Does barrel rolls!</div>', '<span style="color:#00A">C</span><span style="color:#0A0">o</span><span style="color:#0AA">l</span><span style="color:#A00">o</span><span style="color:#A0A">r</span><span style="color:#FA0">f</span><span style="color:#AAA">u</span><span style="color:#555">l</span><span style="color:#55F">!</span>', 'Making great strides!', 'It came from the moon!', 'And my axe!', 'From the inevitable...', '...an impossibility emerges!', 'Awesome site design right there!', 'TLS 1.3 (if supported)!', 'HTTP/3 (if supported)!', 'CSS3 (if supported)!', 'Tor users welcome!', 'Javascript (if supported)!<br><sup style="vertical-align: super;font-size: 16px;">(if you\'re seeing this, it is!)</sup>', 'Adobe Flash!', 'Why, hello there!', 'Put that cookie down!', 'Save the world!', 'Tell your friends!', 'The bee\'s knees!', 'Tubular!', 'This is good for Bitcoin!', 'Who put this here?', 'Crushing it!', 'Flash is love, Flash is life!', 'TCP/IP is just a fad!', 'IPX Forever!', 'Somebody stop me!', 'MT-32 support coming soon!', 'Too big for tape!', 'Powered by Javascript!', 'Compatible with most phones!', 'Small enough for dial-up!', 'A wind of change!', 'It\'s a Sony!', 'Out of eight billion people... you!', 'Also try <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Cooler than <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Collect a LIFE tile!', 'Where will we go today?', 'DETERMINATION!', 'You\'re looking spiffy!', '<a href="/swf/credits.html" class="whitelink">Credit</a> where it\'s due!', 'QUIC (if supported)!', 'Brotli (if supported)!', 'Damn, I\'m good!', '<a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="whitelink">Open source</a>!', 'Beanz Meanz Heinz!', 'No way? No way!', 'Anything else is just an imitation!', 'The work of Nemu!', 'The sum of its parts!', 'Play him off, keyboard cat!', 'What <em>DOES</em> the fox say?', 'Flying toasters!', 'Run peasant! I hunger!', 'I\'ll try not to disappoint!', 'And you are?', 'Boop Boop De Doop!', 'Shall we play a game?', 'So long Flash Player...', 'What\'s up, Doc?', 'The best part of waking up!', 'Performs illegal operations!', 'Allan, please add details!', 'Let our battle begin!', 'LaTeX free!', 'A product of its time!', 'Look at all those buttons!', 'A glowing sky!', 'Your memory serves you well!', 'Not really a stand-up job!', 'The cake is a lie!', 'Speling is hard!', 'Not Netscape compatible!', '<span style="color: transparent; text-shadow: 0px 0px 7px color-mix(in srgb, var(--text) 60%, transparent);">Fog crept up as thick as soup!</span>'];
    if (div.innerHTML == "..." && id == -1 || id == null) {
        const length = quotes.length;
        const rand = Math.round(Math.random() * (length - 1));
        div.innerHTML = quotes[rand];
        return console.log("Have " + length + " splashes. Chose " + rand + ".");
    }
    else {
        if (quotes[id] == undefined) {
            div.innerHTML = "MissingNo.";
            return console.log("Splash " + id + " does not exist!");
        }
        div.innerHTML = quotes[id];
        return console.log("Set splash to " + quotes[id] + ".");
    }
}
splash(-1);
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
    }, 1000);
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
