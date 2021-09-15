var fs = require("fs");

var myargs = process.argv.slice(2);
console.log("Args: " + myargs);

switch (myargs[0]) {
    case "--create-dir":
        fs.mkdirSync(myargs[1]);
        break;

    case "--rename-file":
        fs.renameSync(myargs[1]);
        break;

    case "--delete-dir":
        fs.rmdirSync(myArgs[1]);
        break;

    case "--delete-file":
        fs.unlinkSync(myArgs[1]);
        break;

    default:
        console.log("check the input !!");
}