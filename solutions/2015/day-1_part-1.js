/*
two possible states: ( ) correspond to +1 or -1. to find the final number after parsing the input file.
*/
const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-1.txt", "utf-8");

get_floor(input); 

function get_floor(instructions) {
  let curr_floor = 0;
  
  for (let i = 0; i < instructions.length; i++) {
    curr_floor = instructions[i] == "(" ? curr_floor + 1 : curr_floor - 1;
  }
  console.log(curr_floor); 
  return curr_floor;
}
