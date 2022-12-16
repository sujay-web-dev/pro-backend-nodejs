const express = require("express");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/api/v1/insta", (req, res) => {
  const instaSocial = {
    userName: "Sujayv",
    followers: 190,
    follows: 999,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    userName: "SujayvFacebook",
    followers: 740,
    follows: 9859,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    userName: "Sujayv LinkedIn",
    followers: 7400,
    follows: 985999,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
