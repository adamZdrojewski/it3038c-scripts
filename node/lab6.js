const https = require("http");
const os = require("os");
const ip = require("ip");

https.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>System Information</title>
            </head>
            <body>
                <p>Hostname: ${os.hostname()}</p>
                <p>IP: ${ip.address()}</p>
                <p>Server Uptime: ${os.uptime()} seconds</p>
                <p>Total Memory: ${Math.round(os.totalmem()/1000000)} MB</p>
                <p>Free Memory: ${Math.round(os.freemem()/1000000)} MB</p>
                <p>CPUs: ${os.cpus().length}</p>
            </body>
        </html>
    `);
}).listen(3000);