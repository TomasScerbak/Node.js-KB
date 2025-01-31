const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received name ${name} and age ${age}`);
});

customEmitter.on("response", (name, age) => {
  console.log(`anoher data received name: ${name} and age: ${age}`);
});

customEmitter.emit("response", "John", 34);
