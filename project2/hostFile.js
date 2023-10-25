const fs = require("fs");
const http = require("http");
const minimist = require("minimist");
const {filePath} = minimist(process.argv);

// Check if file path exists
if(!fs.existsSync(filePath)) {
    console.error("File path does not exist");
    process.exit();
}

// Get file content
var fileData = fs.readFileSync(filePath, "utf-8");

//Host http server
http.createServer((req, res) => {
    res.write(fileData);
    res.end();
}).listen(3000);
console.log("Hosting file contents on port 3000");

// Referenced W3Schools on creating a web server with http module
// https://www.w3schools.com/nodejs/nodejs_http.asp