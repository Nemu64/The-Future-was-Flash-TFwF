var dev = document.getElementById('dev');
var button = document.getElementById('ver');
function oneclick() {
    dev.innerHTML='You are 4 steps away from becoming a developer!';
    button.innerHTML='<button class="button" onclick="oneclick2()">ver. 6.0.8</button>';
}
function oneclick2() {
    dev.innerHTML='You are 3 steps away from becoming a developer!';
    button.innerHTML='<button class="button" onclick="oneclick3()">ver. 6.0.8</button>';
}
function oneclick3() {
    dev.innerHTML='You are 2 steps away from becoming a developer!';
    button.innerHTML='<button class="button" onclick="oneclick4()">ver. 6.0.8</button>';
}
function oneclick4() {
    dev.innerHTML='You are 1 step away from becoming a developer!';
    button.innerHTML='<button class="button" onclick="oneclick5()">ver. 6.0.8</button>';
}
function oneclick5() {
    dev.innerHTML='You are now a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF"><span style=color:white>Developer mode</span></a>.';
    button.innerHTML='<button class="button" onclick="oneclick6()">ver. 6.0.8</button>';
}
function oneclick6() {
    dev.innerHTML='No need, you’re already a developer! <a href="https://github.com/Nemu64/The-Future-was-Flash-TFwF"><span style=color:white>Developer mode</span></a>.';
    button.innerHTML='<button class="button" disabled=true onclick="oneclick6()">ver. 6.0.8</button>';
}