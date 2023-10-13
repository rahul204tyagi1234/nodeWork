//Check for bite

const os=require("os");
console.log(os.arch());
//check for hostname
console.log(os.hostname());
// check for platform
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// check for storage

const freeMemory = os.freemem();
// console.log(freeMemory);
console.log(`${freeMemory /1024/1024/1024}`)

// Check for total memory

const totalMemory = os.totalmem();

console.log(`${totalMemory /1024/1024/1024}`)