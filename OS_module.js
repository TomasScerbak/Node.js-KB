const os = require("os");

//Examples

//Info about current user
console.log(os.userInfo());

//methos returns system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
