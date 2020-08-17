var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate(); // fixed
function SetDivContent() {
    var div=document.getElementById('date_dependent');
    if (month==11) { // fixed (the JavaScript months order is 0-11, not 1-12)
        if (day==18) { // the following content will be displayed 12/03/2010, 12/04/2010, [...], 12/09/2010, 12/10/2010
            div.innerHTML='Happy Birthday Nemu!';
        }
        else if (month==06 || day==25) { // this one will be displayed 12/11/2010 and 12/12/2010
            div.innerHTML='Happy Birthday Nick!';
        }
        else if (month==06 || day==8) { // this one - 12/13/2010 and later, until the end of December
            div.innerHTML='Happy Birthday Mom!';
        }
    }
    else if (year==2011 && month>=0) div.innerHTML='content 3'; // OPTIONAL - just to ensure that content 3 is displayed even after December.
}