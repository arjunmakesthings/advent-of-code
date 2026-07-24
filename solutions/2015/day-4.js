/*
find the lowest positive number with no leading zeroes that: 

results in a md5 hash, in hexadecimal, beginning with 5 zeroes. 

input to the hash is a secret key (puzzle input) followed by the number you have to compute.
*/

const crypto = require("crypto");

let input = "bgvyzdsv";

//helper for md5:
function md5(input) {
	return crypto.createHash("md5").update(input).digest("hex");
}

function solve_1(key) {
	const str = key;
	let num = 1;

	let hashed = md5(str + num); // for key + 1: 6940da637d7f68ff727fa41b9b90a209

	let first_five = hashed.substring(0,5);

	while (first_five!=="00000"){
		num++; 

		hashed = md5(str + num); 

		first_five = hashed.substring(0,5); 
	}

	return num;
}

function solve_2(key) {
	const str = key;
	let num = 1;

	let hashed = md5(str + num); // for key + 1: 6940da637d7f68ff727fa41b9b90a209

	let first_six = hashed.substring(0,6);

	while (first_six!=="000000"){
		num++; 

		hashed = md5(str + num); 

		first_six = hashed.substring(0,6); 
	}

	return num;
}

console.log("part 1: " + solve_1(input)); 
console.log("part 2: " + solve_2(input)); 

//console.log(md5("hello"));
// "5d41402abc4b2a76b9719d911017c592"
