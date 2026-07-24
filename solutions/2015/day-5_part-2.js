//day 5; part 2.

const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-5.txt", "utf-8");

function solve_part_2(txts) {
	const strs = txts.split("\n");
	let nice_strings = 0;

	for (let i = 0; i < strs.length; i++) {
		//for each string, check:

		if (
			has_pairs(strs[i]) &&
			has_repeats_with_in_between(strs[i])
		) {
			nice_strings++;
		} else {
			continue;
		}
	}

	return nice_strings;
}

//helpers:
function has_pairs(txt) {
	//check for non-overlapping pairs that occer atleast twice, and return true or false.

	for (let i = 0; i < txt.length - 1; i++) {
		const pair = txt.slice(i, i + 2);

		//go through the remaining: 
		for (let j = i + 2; j < txt.length - 1; j++) {
			if (txt[i] === txt[j] && txt[i + 1] === txt[j + 1]) {
				return true;
			}
		}
	}

	return false;
}

function has_repeats_with_in_between(txt) {
	//check for repeats with exactly one letter in between.

	/*
	[a,b,c,d,e]

	start at b: check a,c
	start at c: check b, d
	start at d: check c, e
	*/
	for (let i = 1; i < txt.length - 1; i++) {
		//incrementing over what could be middle character:
		if (txt[i - 1] == txt[i + 1]) {
			return true;
		}
	}
	return false;
}

console.log(solve_part_2(input));
