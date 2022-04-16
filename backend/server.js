const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

//connect MongoDB
const connectDB = require("./config/db");
connectDB();
// mongoose.connect("mongodb://localhost:27017/yelp-camp", {
//   useNewUrlParser: true,
//   // useCreateIndex: true,
//   useUnifiedTopology: true,
//   // useFindAndModify: false,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

//error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}:`);
});
