var os = require("os");
var timeFormatter = require("./TimeFormatter");


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
    timeFormatter.print();
    console.log("User's name is: " + userInfo.username + " and their catalog location is: " + userInfo.homedir);
}

exports.print = getOSinfo;
