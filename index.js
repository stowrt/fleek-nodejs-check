const express = require("express");

const app = new express();

app.use("/", (req, res) => {
  res.send("Hello from nodejs running on fleek.co");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on ${process.env.PORT || 8080}`);
});
