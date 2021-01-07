$(document).ready(function(){
    var currentTime = moment().format('dddd, MMMM ,Do,YYYY');
    $("#currentDay").append(currentTime)
})