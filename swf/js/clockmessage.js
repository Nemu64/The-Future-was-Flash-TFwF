var date=new Date();
var month=date.getMonth();
var day=date.getDate();
function SetDivContent() {
    setInterval(SetDivContent, 10000);
    var div=document.getElementById('date_dependent');
    if (month==11) {
        if (day==18) {
            div.innerHTML='Happy Birthday Nemu!';
        }
        else if (day==25) {
            div.innerHTML='Merry Christmas!';
        }
    }
    else if (month==06) {
        if (day==25) {
            div.innerHTML='Happy Birthday Nick!';
        }
        else if (day==8) {
            div.innerHTML='Happy Birthday Mom!';
        }
    }
    else if (month==05) {
        if (day==23) {
            div.innerHTML='Happy Birthday Sonic!';
        }
        else if (day==3) {
            div.innerHTML='Happy Birthday Sega!';
        }
    }
    else if (month==0) {
        if (day==1) {
            div.innerHTML='Happy Birthday Flash Player!';
        }
    }
    else if (month==4) {
        if (day==7) {
            div.innerHTML='Happy Birthday Sony!';
        }
    }
    else if (month==10) {
        if (day==20) {
            div.innerHTML='Happy Birthday Windows!';
        }
    }
    else if (month==7) {
        if (day==30) {
            div.innerHTML='Happy Birthday Cassettes!';
        }
    }
}
