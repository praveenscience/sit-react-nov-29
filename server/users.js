// Import the Server.
import express from "express";
// Create a new Route.
const app = express.Router();
// Create a list of users.
const users = [];
// Define some routes.
app.get("/", (req, res) => {
  res.json(users);
});
// Export the file.
export default app;
