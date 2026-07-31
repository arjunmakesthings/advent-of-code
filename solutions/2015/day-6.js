const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2015/day-6.txt", "utf-8");

function parse(txt) {
  const operations = {
    "toggle": 2,
    "turn off": 0,
    "turn on": 1,
  };
  return txt
    .trim()
    .split("\n")
    .map((line) => {
      const match = line.match(
        /(turn on|turn off|toggle)\s+(\d+),(\d+)\s+through\s+(\d+),(\d+)/,
      );

      if (!match) return null;

      return {
        o: operations[match[1]],
        start: {
          x: Number(match[2]),
          y: Number(match[3]),
        },
        end: {
          x: Number(match[4]),
          y: Number(match[5]),
        },
      };
    })
    .filter(Boolean);
}

/*
we have a set of instructions. instructions can be of 3 types: 
- turn on 
- toggle 
- turn off

^ all boolean operations. 

- for each coordinate in: 

	x,y through a,b (all inclusive), 

perform an operation. 

at the end, you want total number of lights that are lit. 
*/

function solve_1(instr) {
  let grid = [];
  let total_lights_on = 0;
  //initialise a grid with all lights turned off:
  for (let y = 0; y < 1000; y++) {
    for (let x = 0; x < 1000; x++) {
      grid.push([x, y, false]);
    }
  }

  for (let i = 0; i < instr.length; i++) {
    //for a given set of instructions, perform the following:

    for (let x = instr[i].start.x; x <= instr[i].end.x; x++) {
      for (let y = instr[i].start.y; y <= instr[i].end.y; y++) {
        const idx = get_index(x, y);

        if (instr[i].o == 0) {
          grid[idx][2] = false;
        } else if (instr[i].o == 1) {
          grid[idx][2] = true;
        } else if (instr[i].o == 2) {
          grid[idx][2] = !grid[idx][2];
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][2] == true) {
      total_lights_on++;
    } else {
      continue;
    }
  }

  return total_lights_on;
}

function solve_2(instr) {
  let grid = [];
  let total_brightness = 0;
  //initialise a grid with all lights turned off:
  for (let y = 0; y < 1000; y++) {
    for (let x = 0; x < 1000; x++) {
      //push brightness here as 0:
      grid.push([x, y, 0]);
    }
  }

  for (let i = 0; i < instr.length; i++) {
    //for a given set of instructions, perform the following:

    for (let x = instr[i].start.x; x <= instr[i].end.x; x++) {
      for (let y = instr[i].start.y; y <= instr[i].end.y; y++) {
        const idx = get_index(x, y);

        if (instr[i].o == 0) {
          grid[idx][2]--;

          //limit to 0:
          if (grid[idx][2] < 0) {
            grid[idx][2] = 0;
          }
        } else if (instr[i].o == 1) {
          grid[idx][2]++;
        } else if (instr[i].o == 2) {
          grid[idx][2] += 2;
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
	total_brightness+=grid[i][2]; 
  }

  return total_brightness;
}

//helper:
function get_index(x, y) {
  //for an x,y coordinate, return an index in the grid array:
  return y * 1000 + x;
}

console.log(
  "part 1: " + solve_1(parse(input)),
  "part 2: " + solve_2(parse(input)),
);
