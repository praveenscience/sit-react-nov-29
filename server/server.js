// Import the Server.
import express from "express";
// Create a new Server.
const app = express();
// Start debugging.
import morgan from "morgan";
app.use(morgan("dev"));
// Import the routes.
import routes from "./routes.js";
app.use("/api", routes);
// Set a Port for the Server.
const port = 5174;
// Create a Default Route for the server.
app.get("/", (req, res) => {
  res.json("Welcome to my API Server.");
});
// Listen the Server.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
