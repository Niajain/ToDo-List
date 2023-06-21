const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",(req,res) =>
{
    // res.send("The request is accepted.");
    var today=new Date();
    if(today.getDay === 6 || today.getDay === 0)
    {
        res.send("yeah !! enjoy uhr weekend");
    }
    else
    {
        res.send("Boo... Uhh have to work lately...");
    }
})

app.listen("3000",() =>
{
    console.log("Server started running on 3000 port.");
})