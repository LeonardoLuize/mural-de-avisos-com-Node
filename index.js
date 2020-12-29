const express = require('express');
const app = express();
const PORT = 3000;
const posts = require('./model/posts')

app.listen(PORT, () => {
    console.log("Server runing on port: " + PORT);
})



app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

app.get("/new", express.JSON, (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");
})

