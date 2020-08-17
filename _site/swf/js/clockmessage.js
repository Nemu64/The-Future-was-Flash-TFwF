var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate(); // fixed
function SetDivContent() {
    var div=document.getElementById('date_dependent');
    if (month==11) {
        if (day=18) {
            div.innerHTML='Happy Birthday Nemu!';
        }
        else if (month==06 || day==25) {
            div.innerHTML='Happy Birthday Nick!';
        }
        else if (month==06 || day==8) {
            div.innerHTML='Happy Birthday Mom!';
        }
    }
    setInterval(SetDivContent, 500);
}