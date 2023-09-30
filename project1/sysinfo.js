// Constants
const os = require("os");

console.log(`
-=-=-= System Information =-=-=-
CPU: ${os.cpus()[0].model}
Total Memory: ${Math.round(os.totalmem() / 1000000000)}GB
OS Platform: ${os.platform()}
Current User: ${os.userInfo().username}
`);

// Referenced NodeJS documentation
// https://nodejs.org/api/os.html