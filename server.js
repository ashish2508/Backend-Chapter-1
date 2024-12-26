import express from "express";
const app = express();
const PORT = 8383;

//HTTP VERBS && Routes (or paths)

app.get("/", (req, res) => {
  res.sendStatus(201);
  console.log("Yay i hit an endpoint",req.method)
	// res.send("Hello, World! Your server is working.");
});

app.listen(PORT, () => console.log(`Server has Started on: ${PORT}`));
