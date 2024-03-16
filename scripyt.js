function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dateString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = dateString;
  }
  
  updateTime(); // Call the function once to initially display the time
  
  // Update time every second
  setInterval(updateTime, 1000);
  