// -----fs Module ---------
// var fs = require("fs")
// fs.writeFileSync("hello.txt", "Hello", err = {
//     if(err) {
//         console.log(err)
//     }
// });
// fs.appendFileSync("hello.txt", " Shivam");

// fs.readFileSync("hello.txt")
// fs.readFileSync("hello.txt", "utf-8")

// ----------- Learning Require - --------
var Test = require("./Testexports");
var obj = new Test();
console.log(obj.print());