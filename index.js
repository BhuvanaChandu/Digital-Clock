function clock(){
    var monthNames=["January","February","March","April",
        "May","June","July","August",
        "september","october","November","December"]

    var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    var today= new Date();
    console.log(today)
    var day=today.getDay();
    console.log(day)

    document.getElementById("Date").innerHTML=(dayNames[today.getDay()]+" "+today.getDate()+ " " +monthNames[today.getMonth()]+" "+today.getFullYear());
    
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var day=h<11 ?" AM":"PM";

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
     
    document.getElementById("hours").innerHTML=h;
    document.getElementById("min").innerHTML=m;
    document.getElementById("sec").innerHTML=s;
    document.getElementById("am/pm").innerHTML=day;


} var inter=setInterval(clock,400);
