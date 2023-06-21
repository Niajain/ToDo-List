const express = require("express");
const bodyparser = require("body-parser");
const { application } = require("express");
const { resolveInclude } = require("ejs");
const date=require(__dirname+"/date.js");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
console.log(date.getDay());
var items=[];
var workItem=[];
var listItem="Work";
app.get("/", (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();
    console.log(currentDay);

    var day=date.getDate();
    res.render("todoOrig", { kindaday: day , nameOfItem: items});
})

app.post("/", (req, res) => {
    var itemName = req.body.itemName;

    console.log(req.body);
    if(req.body.listbtn === "Work")
    {
        workItem.push(itemName);
        res.redirect("/work");
    }
    else
    {
        items.push(itemName);
        res.redirect("/");
    }

})

app.get("/work",(req,res) =>
{
    res.render("todoOrig", { kindaday: listItem , nameOfItem: workItem});
});

app.post("/work",(req,res) =>
{
    itemName = req.body.itemName;
    console.log(itemName);
    workItem.push(itemName);
    res.redirect("/work");
});

app.get("/about", (req,res) =>{
    res.render("about");
})

app.listen("3000", () => {
    console.log("Server started running on 3000 port.");
})