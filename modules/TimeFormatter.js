var os = require("os");

function getFormatTime(uptime) {
    var uptime = os.uptime();

    var hours = Math.floor(uptime / 3600);
    uptime %= 3600;

    var minutes = Math.floor(uptime / 60);
    var seconds = (uptime % 60).toFixed(0);

    return(console.log("System uptime is: " + hours + " h " + minutes + " min " + seconds + " sec."));
}

exports.print = getFormatTime;
