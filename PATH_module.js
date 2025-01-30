const path = require("path");

// Examples

// Getting path separator
console.log(path.sep);

// Constructin path
const filePath = path.join("/content", "subfolder", "index.txt");
console.log(filePath);

// Base name of file directory path - so last file
const base = path.basename(filePath);
console.log(base);

// Absolute Path
const absolute = path.resolve(__dirname, "content", "subfolder", "index.txt");
console.log(absolute);
