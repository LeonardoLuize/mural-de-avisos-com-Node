module.exports = {
    posts: [
        {id: "kasdkask",
        title: "Teste",
        description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },
    
    newPost(title, description){
        posts.push({id: generateId(), title, description});
    }
}

function generateId(){
    return Math.random().toString(36).substr(2, 9);
}