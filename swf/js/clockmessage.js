var date=new Date();
var month=date.getMonth();
var day=date.getDate();
function datedependent() {
    setTimeout(datedependent2, 5);
}
function datedependent2() {
    var div=document.getElementById('splash');
    if (month==11) { /*December*/
        if (day==18) {
            div.innerHTML='Happy Birthday Nemu!';
        }
        else if (day==25) {
            div.innerHTML='Merry Christmas!';
        }
        else if (day==31) {
            div.innerHTML='Happy New Year’s Eve!';
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
    }
    else if (month==9) { /*October*/
        if (day==25) {
            div.innerHTML='Happy Birthday Word!';
        }
    }
}
