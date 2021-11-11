const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));  
app.use('/images', express.static('images'));

fs.readFile("./recipes.json", (err, data) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const recipes = JSON.parse(data);
  app.get('/recipes', (req, res) => {
    res.json(recipes);
  });


});




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});