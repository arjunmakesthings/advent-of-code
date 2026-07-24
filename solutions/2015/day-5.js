//day5.

const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-5.txt", "utf-8");

function solve_part_1(txts) {
	const strs = txts.split("\n");
	let nice_strings = 0;

	for (let i = 0; i < strs.length; i++) {
		if (
			strs[i].includes("ab") ||
			strs[i].includes("cd") ||
			strs[i].includes("pq") ||
			strs[i].includes("xy")
		) {
			continue; //we don't care about this string.
		} else {
			//we care about the string being evaluated:
			if (
				check_vowels(strs[i]) &&
				check_repetitions(strs[i])
			) {
				nice_strings++;
			}
		}
	}

	return nice_strings;
}

//helpers:
function check_vowels(txt) {
	//check if the txt contains enough vowels. repetitions are okay.
	let vowel_counter = 0;

	for (let i = 0; i < txt.length; i++) {
		if (
			txt[i] == "a" ||
			txt[i] == "e" ||
			txt[i] == "i" ||
			txt[i] == "o" ||
			txt[i] == "u"
		) {
			vowel_counter++;
		}

		if (vowel_counter >= 3) {
			return true;
		}
	}
	return false;
}

function check_repetitions(txt) {
	//check for repetitions in text.

	for (let i = 0; i < txt.length - 1; i += 1) {
		//go through each second character & check for repetitions with its partner:
		if (txt[i] == txt[i + 1]) {
			return true;
		}
	}
	return false;
}

console.log(solve_part_1(input));
