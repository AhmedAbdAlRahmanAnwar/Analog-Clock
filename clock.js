var hourHand = document.querySelector('.hourHand');
var minuteHand = document.querySelector('.minuteHand');
var secondHand = document.querySelector('.secondHand');

function time() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    console.log(currentTime);

    var secondDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
    
    var minutesDegree = (minutes * 6);
    minuteHand.style.transform = 'rotate(' + minutesDegree + 'deg)';

    var hoursDegree = (hours * 30);
    hourHand.style.transform = 'rotate(' + hoursDegree + 'deg)';
}

time();
setInterval(time, 1000);