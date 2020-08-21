function god() {
var god = document.getElementById('god'), delay=1000;
setTimeout(function() {
    god.innerHTML = "Informing your computer that I am God";
    setTimeout(function() {
        god.innerHTML = "Informing your computer that I am God.";
        setTimeout(function() {
            god.innerHTML = "Informing your computer that I am God..";
            setTimeout(function() {
                god.innerHTML = "Informing your computer that I am God...";
                setTimeout(function() {
                    god.innerHTML = "Informing your computer that I am God... OK";
                }, delay);
            }, delay);
        }, delay);
    }, delay);
}, delay);
}