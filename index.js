const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    <>
      <h1>Al-salam</h1>
    </>
  );
});
app.listen(8080, () => {
  console.log("I am listening ");
});
