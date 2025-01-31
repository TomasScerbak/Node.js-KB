const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to our homepage.");

  if (req.url === "/about") res.end("Welcome to about page.");

  res.end(`<h1>OOPs Something went wrong!</h1>`);
});

server.listen(5000);
