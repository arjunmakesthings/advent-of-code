/*
two possible states: ( ) correspond to +1 or -1. to find the final number after parsing the input file.

find the position of character that causes curr_floor to be -1.
*/
const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-1.txt", "utf-8");

function get_floor(instructions) {
  let curr_floor = 0;

  for (let i = 0; i < instructions.length; i++) {
    curr_floor = instructions[i] == "(" ? curr_floor + 1 : curr_floor - 1;
    if (curr_floor==-1){
      return i + 1; 
    }
  }
}
