var os = require("os");
var getFormatTime = require("./formatTime");

getFormatTime.print();

function getOSinfo() {
    var type = os.type();

    if (type === "Darwin") {
        type = "OSX";
    } else if (type === "Windows_NT") {
        type = "Windows";
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log("System:", type);
    console.log("System release:", release);
    console.log("CPU model is:", cpu);
    getFormatTime();
    console.log("User's name is: " + userInfo.username + " and their catalog location is: " + userInfo.homedir);
}

exports.print = getOSinfo;
