const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server runing on port: " + PORT);
})

let posts = [
    {id: "kasdkask",
    title: "Teste",
    description: "Descrição teste"
    }
]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
})

app.get("/new", express.JSON, (req, res) => {
    let id = generateId();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description});

    res.send("Post adicionado");
})

function generateId(){
    return Math.random().toString(36).substr(2, 9);
}