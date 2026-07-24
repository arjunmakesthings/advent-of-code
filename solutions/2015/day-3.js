const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-3.txt", "utf-8");

let santa_pos = { x: 0, y: 0 };
let houses_visited = [];

function solve_1(input) {
	let one_present_houses = 0;
	for (let i = 0; i < input.length; i++) {
		//increment position:
		switch (input[i]) {
			case "^":
				santa_pos.y++;
				break;
			case "v":
				santa_pos.y--;
				break;
			case ">":
				santa_pos.x++;
				break;
			case "<":
				santa_pos.x--;
				break;
		}

		//assume the house is new:
		let santa_has_visited = false;

		//check against each house (we care immediately if there is a match):
		for (let j = 0; j < houses_visited.length; j++) {
			if (
				santa_pos.x == houses_visited[j].x &&
				santa_pos.y == houses_visited[j].y
			) {
				// has visited here.
				santa_has_visited = true;
				break;
			}
		}

		//we've checked against all the houses. if it has still remained false:
		if (santa_has_visited == false){
			one_present_houses++; 
			houses_visited.push({x: santa_pos.x, y: santa_pos.y}); 
		}
	}
	return one_present_houses; 
}

function solve_2(input) {
	
}

console.log("part 1: " + solve_1(input)); 

console.log("part 2: " + solve_2(input));

