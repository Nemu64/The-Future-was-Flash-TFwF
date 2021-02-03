function splashes() {
var quotes = ['It’s great!', 'In development!', 'We’ve got easter eggs!', 'Starites!', 'Here we go!', '86.7% JS free!', 'When it’s finished!', 'Made with ♥', 'We have cookies!', 'Where we’re going, we don’t need HTML5!', 'Milk’s favorite cookie!', 'I simply love mangoes!', 'By the Mania, for the Mania!', 'sqrt(-1) love you!', 'Mind the gaps!', 'Held together by duct tape!', 'Built on NT Technology!', 'JIT compiled!', 'Always online!', '<span style="font-family:Sega;font-weight:normal;">To be this good takes AGES</span>', 'At least 3 lines of code!', 'Spared no expense!', 'The sky is the limit!', '& Knuckles!', 'Now on floppy!', '<button class="button2" onclick="spin()">Does barrel rolls!</button>', '<span style="color:#00A">C</span><span style="color:#0A0">o</span><span style="color:#0AA">l</span><span style="color:#A00">o</span><span style="color:#A0A">r</span><span style="color:#FA0">f</span><span style="color:#AAA">u</span><span style="color:#555">l</span><span style="color:#55F">!</span>', 'Making great strides!', 'It came from the moon!', 'And my axe!', 'From the inevitable, an impossiblity emerges!', 'Awesome site design right there!', 'TLS 1.3 (if supported)!', 'HTTP/2 (if supported)!', 'CSS3 (if supported)!', 'Tor users welcome!', 'Javascript (if supported)!<br><sup style="vertical-align: super;font-size: 16px;">(if you’re seeing this, it is!)</sup>', 'Adobe Flash!', 'Why, hello there!', 'Put that cookie down!', 'Save the world!', 'Tell your friends!', 'The bee’s knees!', 'Tubular!', 'This is good for Bitcoin!', 'Who put this here?', 'Crushing it!', 'Flash is love, Flash is life!', 'TCP/IP is just fad!', 'IPX Forever!', 'Somebody stop me!', 'MT-32 support coming soon!', 'Too big for tape!', 'Powered by Javascript!', 'Compatible with most phones!', 'Small enough for dial-up!', 'A wind of change!', 'A one-man production!', 'It’s a Sony!', 'Woah, <a href="https://ruqqus.com" class="whitelink">Ruqqus</a>!', 'Also try <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Cooler than <a href="https://bluemaxima.org/flashpoint/" class="whitelink">Flashpoint</a>!', 'Collect a LIFE tile!', 'Where will we go today?', 'DETERMINATION!', 'You’re looking spiffy!', '<a href="/swf/credits.html" class="whitelink">Credit</a> where it’s due!', 'QUIC (if supported)!', 'Brotli (if supported)!', 'Damn, I’m good!', 'Also try <a href="https://ruqqus.com" class="whitelink">Ruqqus</a>!', '<a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF" class="whitelink">Open source</a>!', 'Beanz Meanz Heinz!', 'No way? No way!', 'Anything else is just an imitation!'];
var length = quotes.length;
var rand = Math.round(Math.random()*(length - 1));
document.getElementById('splash').innerHTML=(quotes[rand]);
}
function spin() {
    document.classList.toggle("roll");
    setTimeout("document.body.classList.toggle('roll');", 4000);
}
function changethemetolight() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/light.css">';
    var lighticon = document.getElementById('bulblight')
    lighticon.setAttribute("src","/swf/images/lightbulb.svg")
    lighticon.setAttribute("onclick","changethemetodark()")
}
function changethemetodark() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/dark.css">';
    var lighticon = document.getElementById('bulblight')
    lighticon.setAttribute("src","/swf/images/darkbulb.svg")
    lighticon.setAttribute("onclick","changethemetolight()")
}