let lastSecond = 0; // Store last second value

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotation angles
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  
  // Fix for second-hand jump issue
  if (seconds === 0 && lastSecond === 59) {
    // If we go from 59 → 0, increase by 360 to keep it smooth
    lastSecond += 360;
  }
  const secondDeg = lastSecond + 6; // Increase by 6° every second
  lastSecond = secondDeg; // Store last known angle

  // Get clock hands
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  // Apply rotations
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately
