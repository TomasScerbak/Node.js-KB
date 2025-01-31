const { readFile, writeFile } = require("fs").promises;

// const util = require("util");

// Callback with Promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       err ? reject(err) : resolve(data);
//     });
//   });
// };

// getText("./content/subfolder/index.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Async Await approach with util module and OOB promisify method
// const rfPromise = util.promisify(readFile);
// const wfPromise = util.promisify(writeFile);

const readFiles = async () => {
  try {
    const firstFile = await readFile("./content/subfolder/index.txt", "utf-8");

    const secondFile = await readFile("./content/content.txt", "utf-8");

    await writeFile("./content/subfolder/zidan.txt", "hey this is new awesome");

    console.log(firstFile, " ", secondFile);
  } catch (error) {
    console.log(error);
  }
};

readFiles();
