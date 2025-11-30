// Import the Server.
import express from "express";
// Create a new Route.
const app = express.Router();
// Create a list of users.
const users = [
  {
    ID: "praveenscience",
    Name: "Praveen Kumar Purushothaman",
    Avatar: "https://github.com/praveenscience.png"
  },
  {
    ID: "rutujavatane27-lab",
    Name: "Rutuja Vatane",
    Avatar: "https://github.com/rutujavatane27-lab.png"
  },
  {
    ID: "sohelkhan006",
    Name: "Sohel Khan",
    Avatar: "https://github.com/sohelkhan006.png"
  }
];
// Define some routes.
app.get("/", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
  res.json(users);
});
// Export the file.
export default app;
