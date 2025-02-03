const express = require("express");
const app = express();

const { products } = require("./data");

// API to access Home Page with link
app.get("/", (req, res) => {
  res.send("<h1>Home Page Welcome</h1><a href=api/products>Products</a>");
});

// API to get all products
app.get("/api/products", (req, res) => {
  const productsArr = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });

  res.json(productsArr);
});

// API to get product by ID using PARAMs
app.get(`/api/products/:id`, (req, res) => {
  const { id } = req.params;

  const product = products.find((prod) => prod.id === Number(id));

  if (!product) return res.status(404).send("Product does not exist.");

  res.json(product);
});

// API to get products with QUERY PARAMs
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((prod) => {
      return prod.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (!sortedProducts.length) return res.status(200).send("No products find!");

  return res.status(200).send(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is up an running at port 5000");
});
