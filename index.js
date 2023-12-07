import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const todoItems =[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {todoItems: todoItems});
});

app.post("/add", (req, res) => {
    const todoText = req.body.todoText;
    console.log(todoText);
    todoItems.push(todoText);
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(__dirname);
});


