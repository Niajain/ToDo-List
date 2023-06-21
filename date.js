module.exports.getDate=getDate;

console.log(module);

function getDate()
{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();

    var day = today.toLocaleDateString("en-US", options); // 9/17/2016
    return day;
}
module.exports.getDay=getDay;

function getDay()
{
    var options = { weekday: 'long'};
    var today = new Date();

    var day = today.toLocaleDateString("en-US", options); // 9/17/2016
    return day;
}