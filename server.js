import express from "express";
import dotenv from "dotenv";


dotenv.config();


const app = express();


app.use(express.static("."));


app.get("/", (req,res)=>{

    res.sendFile(
        process.cwd() + "/index.html"
    );

});


app.listen(3000,()=>{

    console.log(
        "FIFA TV lancé sur http://localhost:3000"
    );

});
