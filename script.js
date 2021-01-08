$(document).ready(function(){
   var workHours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]


    // adding date and time to the header
    var today = moment().format('dddd, MMMM ,Do,YYYY, h:mm a');
    $("#currentDay").append(today)
    // creating a for loop to display the all the columns
    
    for(i=0; i<workHours.length;i++){
     console.log(workHours[i])
    //  row which holds the columns
    
    var row = $("<div></div>").addClass("row")
     $(".container").append(row)
    
     //  hours column
      var time = $("<div></div>").addClass("col-2  hour time-block ");
      $(time).text(workHours[i])
      $(row).append(time)
    
      // task description column
      var description= $("<textarea></textarea>").addClass("col-8  description textarea ").attr("id",workHours[i]);
       $(row).append(description)

    // save button column
    var savebtn = $("<button></button>").addClass("col-2 saveBtn ");
    var icon = $("<i ></i>").addClass("fas fa-save")
    $(savebtn).append(icon)
    $(row).append(savebtn)
    }
    
    //add and remove classes based on past, present and future hours
    now = moment().format("H")
    console.log(now)
   
    // adding if conditions for 9am-5pm(9-17 hrs)and sort past, present and future hours
    if(now>9){
        $("#9am").addClass("past")
    }else if(now>=9 && now<10){
        $("#9am").addClass("present")
    }else if(now<9){
        $("#9am").addClass("future")
    }
    if(now>10){
        $("#10am").addClass("past")
    }else if(now>=10 && now<11){
        $("#10am").addClass("present")
    }else if(now<10){
        $("#10am").addClass("future")
    }
    if(now>11){
        $("#11am").addClass("past")
    }else if(now>=11 && now<12){
        $("#11am").addClass("present")
    }else if(now<11){
        $("#11am").addClass("future")
    }
    if(now>12){
        $("#12pm").addClass("past")
    }else if(now>=12 && now<13){
        $("#12pm").addClass("present")
    }else if(now<12){
        $("#12pm").addClass("future")
    }
    if(now>13){
        $("#1pm").addClass("past")
    }else if(now>=13 && now<14){
        $("#1pm").addClass("present")
    }else if(now<13){
        $("#1pm").addClass("future")
    }
    if(now>14){
        $("#2pm").addClass("past")
    }else if(now>=14 && now<15){
        $("#2pm").addClass("present")
    }else if(now<14){
        $("#2pm").addClass("future")
    }

    if(now>15){
        $("#3pm").addClass("past")
    }else if(now>=15 && now<16){
        $("#3pm").addClass("present")
    }else if(now<15){
        $("#3pm").addClass("future")
    }

    if(now>16){
        $("#4pm").addClass("past")
    }else if(now>=16 && now<17){
        $("#4pm").addClass("present")
    }else if(now<16){
        $("#4pm").addClass("future")
    }

    if(now>17){
        $("#5pm").addClass("past")
    }else if(now>=17 && now<18){
        $("#5pm").addClass("present")
    }else if(now<17){
        $("#5pm").addClass("future")
    }

   
})