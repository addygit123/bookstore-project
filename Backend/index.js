const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 5000;
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://bookstore-project-pied.vercel.app/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Welcome to my server");
  });
}

main()
  .then(() => console.log("MongoBD connected successfully!"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log("running!");
});
