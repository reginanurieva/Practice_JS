$(document).ready(function() {
  
  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const hourHand = document.querySelector('.hour-hand');
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const minsHand = document.querySelector('.min-hand');
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  }
  setDate();
  setInterval(setDate, 1000);
})