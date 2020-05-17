const express = require("express");

const app = express();

const PORT = 4000;

//

app.get("*", (req, res) => {
  res.status(404).send("File not found");
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
