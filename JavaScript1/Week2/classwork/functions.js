function hoursMinutes2Minutes( hours, minutes ){
	let hoursMinutes = 60 * hours + minutes;
	return hoursMinutes;
	// return 60 * hours + minutes;
}

// let hoursMinutes = hoursMinutes2Minutes( 4, 20 );
console.log( hoursMinutes2Minutes( 4, 20 ) );

function hoursMinutesSeconds2Seconds( hours, minutes, seconds ){
	let hoursMinutesSeconds = 3600 * hours + 60 * minutes + seconds;
	return hoursMinutesSeconds;
}

console.log( hoursMinutesSeconds2Seconds( 4, 20 ) );

function fullName( firstName, secondName, isFormal ){
	let name;
	if( isFormal ) {
		name = firstName + " " + secondName;
	} else {
		name = secondName + ", " + firstName;
	}
	return name;
}

console.log( fullName( "Rasmus", "Jones", true ) );

function fullNameMany( firstName, secondName, whichFormal ){
	let name;
	if( whichFormal === 1 ) {
		name = firstName + " " + secondName;
	} else if( whichFormal === 2 ) {
		name = firstName;
	} else {
	// } else if( whichFormal === 3 ) {
		name = secondName + ", " + firstName;
	}
	return name;
}

// Mental Idea:
// whichFormal === 1  --> 21
// whichFormal === 2  --> 23
// whichFormal === 3  --> 25 else

// function fullNameFormal( firstName, secondName ){
// 	let fullName = secondName + ", " + firstName;
// 	return fullName;
// }

console.log( fullNameMany( "Rasmus", "Jones", 4 ) );