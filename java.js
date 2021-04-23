var data = [
    {},
    {open:18, close:22},
    {open:18, close:22},
    {open:18, close:22},
    {open:12, close:22},
    {open:12, close:22},
    {open:12, close:22}
];

var date = new Date();
var dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, etc...
var openingTimes = data[dayOfWeek];
var openClosed = false; // closed by default

// check that there are opening times for today
if (openingTimes.hasOwnProperty('open') && openingTimes.hasOwnProperty('close')){
    var hour = date.getHours()
    openClosed = openingTimes.open <= hour && hour < openingTimes.close;
}
var msg =   function () {
    if (openClosed == true){
        return  "we are open now";
    } else {
       switch(dayOfWeek) {
            case 1:
                return "open at 6pm";
                break;
            case 2:
                return "open at 6pm";
                break;
            case 3:
                return "open at 6pm";
                break;
            case 4:
                return "open at 12pm";
                break;
            case 5:
                return "open at 12pm";
                break;
            case 6:
                return "open at 12pm";
                break;

            default:
                return "close";
    }
}
$( document ).ready(function() {
    $("#open_close").html(msg());
});
