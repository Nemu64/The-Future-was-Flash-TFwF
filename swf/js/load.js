const useflashplayer = new URLSearchParams(window.location.search);
var forceflash = useflashplayer.get("forceflash");
if (forceflash == "true" || forceflash == "1"){}else{document.getElementById("ruffle").setAttribute("src", "/swf/ruffle/ruffle.js"); window.RufflePlayer = window.RufflePlayer || {};window.RufflePlayer.config = {"polyfills": true,"autoplay": "on","unmuteOverlay": "hidden",}}