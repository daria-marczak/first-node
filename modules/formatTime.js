var os = require("os");

function getFormatTime() {
    var uptime = os.uptime();

    var time = Math.floor(uptime) / 60;
    var upTimeMinutes = time.toFixed(0);

    var minutesToHours = upTimeMinutes / 60;

    console.log("System uptime is: " + upTimeMinutes + " min, what makes it " + minutesToHours + " hours");
}

exports.print = getFormatTime;
