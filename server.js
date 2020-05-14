const express = require('express');

const app = express();

const PORT = 4000;

app.get("*", (req, res) => {
  res.send("File not found");
})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})