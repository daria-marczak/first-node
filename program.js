process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function() {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
                break;
            case "/version":
                process.stdout.write("Node version is: " + process.versions.node + "\n");
                break;
            default:
                process.stdouterr.write("Wrong instruction!\n");
                break;
        }
    }
});
