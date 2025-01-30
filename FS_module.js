// Synchronous methods of File System
const { readFileSync, writeFileSync } = require("fs");

// Reading files
const firstFile = readFileSync("./content/first.txt", "utf-8");
// console.log(firstFile);
const secondFile = readFileSync("./content/subfolder/index.txt", "utf-8");
// console.log(secondFile);

//Create files
writeFileSync(
  "./content/new_file.txt",
  "Hello test of new content if new file",
  { flag: "a" }
);

// Asynchronous methods of File System
const { readFile, writeFile } = require("fs");

// Reading Files async then reading second fiile and at the end creating new 3rd file
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("ERROR FROM FIRST", err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/index.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("ERROR FROM SECOND", err);
      return;
    }
    const second = result;
    writeFile(
      "./content/new_file_async.txt",
      `We are storin first and second to new file: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log("ERROR FROM THIRD", err);
          return;
        }
        console.log(result);
      }
    );
  });
});
