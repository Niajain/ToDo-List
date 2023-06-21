const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // // res.send("The request is accepted.");
    // var today=new Date();
    // var currentDay=today.getDay();
    // var day="";
    // if(today.getDay === 6 || today.getDay === 0)
    // {
    //     day="Weekend";
    //     // res.send("yeah !! enjoy uhr weekend");
    // }
    // else
    // {
    //     day="Weekday";
    //     // res.send("Boo... Uhh have to work lately...");
    // }
    // res.render("list",{kindaday:day}); 
    var today = new Date();
    var currentDay = today.getDay();
    console.log(currentDay);
    var Day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Satday";
            break;
        default:
            console.log("Error!! as currenday is :"+currentDay);
    }
    res.render("list",{kindaday:day});
})

app.listen("3000", () => {
    console.log("Server started running on 3000 port.");
})