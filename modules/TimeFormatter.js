var os = require("os");

function getFormatTime() {
    var uptime = os.uptime();

    var time = Math.floor(uptime) / 60;
    var upTimeMinutes = time.toFixed(0);

    var toHours = upTimeMinutes / 60;
    var minutesToHours = toHours.toFixed(0);

    console.log("System uptime is: " + upTimeMinutes + " min, what makes it " + minutesToHours + " hours");
}

exports.print = getFormatTime;
