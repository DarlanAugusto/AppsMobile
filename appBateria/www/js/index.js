window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    document.getElementById('status').innerHTML = "Level: " + status.level + " isPlugged: " + status.isPlugged;
}