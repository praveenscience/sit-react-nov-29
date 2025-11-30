// Import the Server.
import express from "express";
// Create a new Route.
const app = express.Router();
// Define some routes.
app.get("/", (req, res) => {
  res.json("You're in the APIs.");
});
// Import other routes.
import users from "./users.js";
app.use("/users", users);
// Export the file.
export default app;
