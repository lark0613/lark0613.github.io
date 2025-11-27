function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('zh-CN', {hour12: false});
  document.getElementById('date').textContent = now.toLocaleDateString('zh-CN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
}
setInterval(updateClock, 1000);
updateClock();