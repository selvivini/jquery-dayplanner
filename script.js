$(document).ready(function(){
   var workHours = ["9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm"]


    // adding date and time to the header
    var currentTime = moment().format('dddd, MMMM ,Do,YYYY, h:mm a');
    $("#currentDay").append(currentTime)
    // creating a for loop to display the coumns of hours
    
    for(i=0; i<workHours.length;i++){
     console.log(workHours[i])
     var row = $("<div></div>").addClass("row")
     $(".container").append(row)
      var time = $("<div></div>").addClass("col-2  hour time-block");
      $(time).text(workHours[i])
      $(row).append(time)
      var description= $("<textarea></textarea>").addClass("col-8  description textarea");
      
      $(row).append(description)
      var savebtn = $("<button></button>").addClass("col-2 saveBtn ");
      $(savebtn).text("save")
      $(row).append(savebtn)
    }



})