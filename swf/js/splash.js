console.log('What are you doing? Looking for secrets? Don’t stick your nose where it doesn’t belong. Or you might find something you DON’T like... Hee hee hee.');
var date=new Date();
var month=date.getMonth();
var day=date.getDate();
var div=document.getElementById('splash');
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
else if (month==06) { /*July*/
    if (day==25) {
        div.innerHTML='Happy Birthday Nick!';
    }
    else if (day==8) {
        div.innerHTML='Happy Birthday Mom!';
    }
}
else if (month==05) { /*June*/
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
        div.innerHTML='Happy Birthday Flash Player!';
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
    if (day==30) {
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
if (div.innerHTML=="...") {
    var quotes = ['It\'s great!', 'In development!', 'We\'ve got easter eggs!', 'Starites!', 'Here we go!', '88.6% JS free!', 'When it\'s finished!', 'Made with ♥', 'We have cookies!', 'Where we\'re going, we don\'t need HTML5!', 'Milk\'s favorite cookie!', 'I simply love mangoes!', 'By the Mania, for the Mania!', 'sqrt(-1) love you!', 'Mind the gaps!', 'Held together by duct tape!', 'Built on NT Technology!', 'JIT compiled!', 'Always online!', '<span style="font-family:Sega;font-weight:normal;">To be this good takes AGES</span>', 'At least 3 lines of code!', 'Spared no expense!', 'The sky is the limit!', '& Knuckles!', 'Now on floppy!', '<button class="button2" onclick="spin()">Does barrel rolls!</button>', '<span style="color:#00A">C</span><span style="color:#0A0">o</span><span style="color:#0AA">l</span><span style="color:#A00">o</span><span style="color:#A0A">r</span><span style="color:#FA0">f</span><span style="color:#AAA">u</span><span style="color:#555">l</span><span style="color:#55F">!</span>', 'Making great strides!', 'It came from the moon!', 'And my axe!', 'From the inevitable, an impossiblity emerges!', 'Awesome site design right there!', 'TLS 1.3 (if supported)!', 'HTTP/2 (if supported)!', 'CSS3 (if supported)!', 'Tor users welcome!', 'Javascript (if supported)!<br><sup style="vertical-align: super;font-size: 16px;">(if you\'re seeing this, it is!)</sup>', 'Adobe Flash!', 'Why, hello there!', 'Put that cookie down!', 'Save the world!', 'Tell your friends!', 'The bee\'s knees!', 'Tubular!', 'This is good for Bitcoin!', 'Who put this here?', 'Crushing it!', 'Flash is love, Flash is life!', 'TCP/IP is just fad!', 'IPX Forever!', 'Somebody stop me!', 'MT-32 support coming soon!', 'Too big for tape!', 'Powered by Javascript!', 'Compatible with most phones!', 'Small enough for dial-up!', 'A wind of change!', 'A one-man production!', 'It\'s a Sony!', 'Out of eight billion people... you!', 'Also try <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Cooler than <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Collect a LIFE tile!', 'Where will we go today?', 'DETERMINATION!', 'You\'re looking spiffy!', '<a href="/swf/credits.html" class="whitelink">Credit</a> where it\'s due!', 'QUIC (if supported)!', 'Brotli (if supported)!', 'Damn, I\'m good!', '<a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="whitelink">Open source</a>!', 'Beanz Meanz Heinz!', 'No way? No way!', 'Anything else is just an imitation!', 'The sum of its parts!', 'Play him off, keyboard cat!', 'What <em>DOES</em> the fox say?', 'Flying toasters!', 'Run peasant! I hunger!', 'I\'ll try not to disappoint!', 'And you are?', 'Boop Boop De Doop!', 'Shall we play a game?', 'So long Flash Player...', 'What\'s up, Doc?', 'The best part of waking up!', 'Performs illegal operations!', 'Allan, please add details!', 'Let our battle begin!', 'LaTeX free!', 'A product of its time!', 'Look at all those buttons!', 'A glowing sky!', 'Your memory serves you well!', 'Not really a stand-up job!', 'The cake is a lie!', 'Speling is hard!', 'Not Netscape compatible!'];
    var length = quotes.length;
    var rand = Math.round(Math.random()*(length - 1));
    div.innerHTML=(quotes[rand]);
}
/*Play sound when changing themes*/
function clicksound() {
    document.getElementById("click").play();
}
/*Detect if Flash is installed and displat a warning if it's not*/
var div = document.getElementById('FlashDetect');
if(!navigator.plugins.namedItem('Shockwave Flash')) {
    div.innerHTML='<span style="color:red;">Flash doesn\'t appear to be installed! Consider installing <a href="https://ruffle.rs/" class="redlink" style="text-decoration: underline">Ruffle</a> before continuing.<br><br></span>';
}
/*Do a barrel roll!*/
function spin() {
    document.getElementById("html").classList.add("roll");
    setTimeout("document.getElementById(\"html\").classList.remove(\"roll\");", 4000);
}
/*Change themes*/
function changethemetolight() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/light.css">';
    var lighticon = document.getElementById('bulblight')
    lighticon.setAttribute("src","/swf/images/lightbulb.svg")
    lighticon.setAttribute("onclick","changethemetodark(),clicksound()")
}
function changethemetodark() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/dark.css">';
    var lighticon = document.getElementById('bulblight')
    lighticon.setAttribute("src","/swf/images/darkbulb.svg")
    lighticon.setAttribute("onclick","changethemetolight(),clicksound()")
}
/*"Developer" mode*/
var dev = document.getElementById('dev');
var button = document.getElementById('ver');
var clicktxt = ['You are 1 step away from becoming a developer!', 'You are now a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="smallwhitelink">Developer mode</a>.', 'No need, you\'re already a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="smallwhitelink">Developer mode</a>.']
var clickcount = 5;
function oneclick() {
    if (clickcount > 2) {dev.innerHTML = "You are " + String(clickcount - 1) + " steps away from becoming a developer"}
    else if (clickcount > 1) {dev.innerHTML = clicktxt[0]}
    else if (clickcount > 0) {dev.innerHTML = clicktxt[1]}
    else if (clickcount <= 0) {dev.innerHTML = clicktxt[2]}
    clickcount--;
}
/*Clock for homepage*/
function clock() {
    var d = new Date();
    var n = d.toLocaleString([], { hour12: true});
    document.getElementById("clock").innerHTML = n;
    setInterval(clock, 500)
}
