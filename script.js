var workHours = [ '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
var storedAppointments;
var returnedAppointments;
var timeIndex;
var storedDetails;
var today;
var row;
var time;
var savebtn;
var description;
var icon;

$(document).ready(function() {
	// adding date and time to the header
	today = moment().format('dddd, MMMM ,Do,YYYY, h:mm a');
	$('#currentDay').append(today);

	// creating a for loop to display the all the columns

	for (i = 0; i < workHours.length; i++) {
		//  row which holds the columns

		row = $('<div></div>').addClass('row');
		$('.container').append(row);

		//  hours column
		time = $('<div></div>').addClass('col-2  hour time-block ');
		$(time).text(workHours[i]);
		$(row).append(time);

		// task description column
		description = $('<textarea></textarea>').addClass('col-8  description textarea ').attr('id', workHours[i]);
		$(row).append(description);

		// save button column
		savebtn = $('<button></button>').addClass('col-2 saveBtn ');
		icon = $('<i ></i>').addClass('fas fa-save');
		$(savebtn).append(icon);
		$(row).append(savebtn);
	}

	//add and remove classes based on past, present and future hours
	now = moment().format('H');

	// adding if conditions for 9am-5pm(9-17 hrs)and sort past, present and future hours
	if (now > 9) {
		$('#9am').addClass('past');
	} else if (now >= 9 && now < 10) {
		$('#9am').addClass('present');
	} else if (now < 9) {
		$('#9am').addClass('future');
	}
	if (now > 10) {
		$('#10am').addClass('past');
	} else if (now >= 10 && now < 11) {
		$('#10am').addClass('present');
	} else if (now < 10) {
		$('#10am').addClass('future');
	}
	if (now > 11) {
		$('#11am').addClass('past');
	} else if (now >= 11 && now < 12) {
		$('#11am').addClass('present');
	} else if (now < 11) {
		$('#11am').addClass('future');
	}
	if (now > 12) {
		$('#12pm').addClass('past');
	} else if (now >= 12 && now < 13) {
		$('#12pm').addClass('present');
	} else if (now < 12) {
		$('#12pm').addClass('future');
	}
	if (now > 13) {
		$('#1pm').addClass('past');
	} else if (now >= 13 && now < 14) {
		$('#1pm').addClass('present');
	} else if (now < 13) {
		$('#1pm').addClass('future');
	}
	if (now > 14) {
		$('#2pm').addClass('past');
	} else if (now >= 14 && now < 15) {
		$('#2pm').addClass('present');
	} else if (now < 14) {
		$('#2pm').addClass('future');
	}

	if (now > 15) {
		$('#3pm').addClass('past');
	} else if (now >= 15 && now < 16) {
		$('#3pm').addClass('present');
	} else if (now < 15) {
		$('#3pm').addClass('future');
	}

	if (now > 16) {
		$('#4pm').addClass('past');
	} else if (now >= 16 && now < 17) {
		$('#4pm').addClass('present');
	} else if (now < 16) {
		$('#4pm').addClass('future');
	}

	if (now > 17) {
		$('#5pm').addClass('past');
	} else if (now >= 17 && now < 18) {
		$('#5pm').addClass('present');
	} else if (now < 17) {
		$('#5pm').addClass('future');
	}

	//get the value of textare input
	$('.saveBtn').on('click', function(e) {
		e.preventDefault();
		var appointmentDesc = $(this).parent('div').children('textarea').val();
		var appointmentTime = $(this).parent('div').children('textarea').attr('id');
		var appointment = { time: appointmentTime, details: appointmentDesc };
		console.log(appointmentTime);

		var tempArray = JSON.parse(localStorage.getItem('appointments'));

		if (tempArray === null) {
			localStorage.setItem(
				'appointments',
				JSON.stringify([ { time: appointmentTime, details: appointmentDesc } ])
			);
		} else {
			tempArray.push(appointment);
			localStorage.setItem('appointments', JSON.stringify(tempArray));
		}
	});

	// Getting the localstorage item to populate on the text area of description
	storedAppointments = JSON.parse(localStorage.getItem('appointments'));
	if (storedAppointments) {
		for (i = 0; i < storedAppointments.length; i++) {
			returnedAppointments = storedAppointments[i];
			timeIndex = returnedAppointments.time;
			storedDetails = returnedAppointments.details;
			if (storedDetails !== null) {
				$('#' + timeIndex).val(storedDetails);
			}
		}
	}
});
