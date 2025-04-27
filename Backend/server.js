// const express = require("express");
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("app is ready");
});

// get a list of name
app.get("/api/name", (req, res) => {
  const name = [
    {
      id: 1,
      title: "A",
      content: "This is first name",
    },
    {
      id: 2,
      title: "B",
      content: "This is second name",
    },
    {
      id: 3,
      title: "C",
      content: "This is third name",
    },
    {
      id: 4,
      title: "D",
      content: "This is four name",
    },
    {
      id: 5,
      title: "E",
      content: "This is five name",
    },
    {
      id: 6,
      title: "F",
      content: "This is six name",
    },
  ];
  res.send(name);
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

// or another way to start server

// app.listen(port);
