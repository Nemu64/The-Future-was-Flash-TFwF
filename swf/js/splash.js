function splashes() {
var quotes = ['It’s great!', 'In development!', 'We’ve got easter eggs!', 'Starites!', 'Here we go!', '86.7% JS free!', 'When it’s finished!', 'Made with ♥', 'We have cookies!', 'Where we’re going, we don’t need HTML5!', 'Milk’s favorite cookie!', 'I simply love mangoes!', 'Google analyticsed!', 'By the Mania, for the Mania!', 'sqrt(-1) love you!', 'Mind the gaps!', 'Held together by duct tape!', 'Built on NT Technology!', 'JIT compiled!', 'Always online!', '<span style="font-family:Sega;font-weight:normal;">To be this good takes AGES</span>', 'At least 3 lines of code!', 'Spared no expense!', 'The sky is the limit!', '& Knuckles!', 'Now on floppy!', '<button class="button2" onclick="spin()">Does barrel rolls!</button>', '<span style="color:#00A">C</span><span style="color:#0A0">o</span><span style="color:#0AA">l</span><span style="color:#A00">o</span><span style="color:#A0A">r</span><span style="color:#FA0">f</span><span style="color:#AAA">u</span><span style="color:#555">l</span><span style="color:#55F">!</span>', 'Making great strides!', 'It came from the moon!', 'And my axe!', 'From the inevitable, an impossiblity emerges!', 'Awesome site design right there!', 'TLS 1.3 (if supported)!', 'HTTP/2 (if supported)!', 'CSS3 (if supported)!', 'Tor users welcome!', 'Javascript (if supported)!<br><sup style="vertical-align: super;font-size: 16px;">(if you’re seeing this, it is!)</sup>', 'Adobe Flash!', 'Why, hello there!', 'Put that cookie down!', 'Save the world!', 'Tell your friends!', 'The bee’s knees!', 'Tubular!', 'This is good for Bitcoin!', 'Who put this here?', 'Crushing it!', 'Flash is love, Flash is life!', 'TCP/IP is just fad!', 'IPX Forever!', 'Somebody stop me!', 'MT-32 support coming soon!', 'Too big for tape!', 'Powered by Javascript!', 'Compatible with most phones!', 'Small enough for dial-up!', 'A wind of change!', 'A one-man production!', 'It’s a Sony!', 'Woah, <a href="https://ruqqus.com"><span style=color:white>Ruqqus</span></a>!', 'Also try <a href="https://bluemaxima.org/flashpoint/"><span style=color:white>Flashpoint</span></a>!', 'Cooler than <a href="https://bluemaxima.org/flashpoint/"><span style=color:white>Flashpoint</span></a>!', 'Collect a LIFE tile!', 'Where will we go today?', 'DETERMINATION!', 'You’re looking spiffy!', '<a href="/swf/credits.html"><span style=color:white>Credit</span></a> where it’s due!', 'QUIC (if supported)!', 'Brotli (if supported)!', 'Damn, I’m good!', 'What happens when you click the version number?', '<a href="https://ruqqus.com"><span style=color:white;>Also try </span></a><a style="vertical-align: sub;" href="https://ruqqus.com"><img src="/swf/images/ruqqus_text_logo_white.webp" alt="The future is Ruqqus!" height="32" width="125"></a>', '<a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF"><span style=color:white>Open source</span></a>!', 'Beanz Meanz Heinz!', 'No way? No way!', 'Anything else is just an imitation!'];

var length = quotes.length;
var rand = Math.round(Math.random()*(length - 1));

var splashes = document.getElementById('splash');
splashes.innerHTML=(quotes[rand]);
}

function spin() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/roll.css">';
    setTimeout(spin2, 4000);
}
function spin2() {
    var spinner = document.getElementById('style');
    spinner.innerHTML = '<link rel=stylesheet href="/swf/css/index.css">';
}