const express = require("express");
const app = express();

let { people } = require("./data");

app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse JSON
app.use(express.json());

// GET All people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name." });
  }
  res.status(201).json({ success: true, person: name });
});

// POST
app.post("/login", (req, res) => {
  const { name } = req.body;
  res.status(201).send("SUCCESS");
});

app.listen(5000, (req, res) => {
  console.log("Server is up and running on port 5000");
});
