const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("mins");
const secondsEl=document.getElementById("seconds");
const newYear="15 jan 2023";
function countdown()
{
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalseconds=(newYearDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;
}

countdown();
setInterval(countdown,1000);