import express from "express";

const port=3000;
const app=express();

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});


// -----------------------------------
// ---------Truncate Card-------------

// const cardContent = document.getElementById('card-text');
// const readMoreButton = document.getElementById('read-more-button');