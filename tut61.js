const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("ASHISH","ROHINI")

console.log("The content of the file is:");
console.log(text);
console.log("Creating a new File")
fs.writeFileSync("aru.txt",text);