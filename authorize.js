const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = {
      name: "John",
      id: 3,
    };
  } else {
    res.status(401).send("Unanthorized");
  }
  console.log("authorized");
  next();
};

module.exports = authorize;
