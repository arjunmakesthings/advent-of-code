/*

terms: 
mc -> microchip; g -> generator; cg = compatible generator; cmc -> compatible microchip. 

possible combinations:
mc + mc = ok
cg + cmc = ok
g + g = ok
cg + cmc + g || cg + cmc + mc = ok

restrictions: 
entry = floor 1; assembler = floor 4.

lift >= 1 item && lift <= 2 items.

for an input configuration, what is the minimum number of steps required to bring all the objects onto a floor?
*/

/*
we essentially want an array of items on each floor. an item has two pieces of information: generator / microchip; and what material.

[{material: x, type: generator}, {material: x, type: generator}] //floor 1
[]
[]
[] //floor 4.

next with every iteration i, we want to move an object between the floors; in such a manner that it satisfies the previously stated rules.

however, we cannot just arbitarily move any item, we need to move an item strategically. 
*/

// let floors = new Array(4);

/*
floors.push(parse_input()); 
console.log(floors);
*/

let floors = [
  [
    { material: "hydrogen", type: "microchip" },
    { material: "lithium", type: "microchip" },
  ],
  [{ material: "hydrogen", type: "generator" }],
  [{ material: "lithium", type: "generator" }],
  [],
];

let trips = 0;

think();

function think() {
  if (trips == 0) {
    //you are limited with what you can move by seeing what is available to you on floor 1 & floor 2.
    let choices = floors[0];
    let next = floors[1];

	console.log("before", choices);

    for (let i = choices.length-1; i >= 0; i--) {
      for (let j = next.length-1; j >= 0; j--) {
        if (choices[i].material != next[j].material) {
          choices.splice(i,1);
        }
      }
    }

	if (choices.length>2){
		//has to have some success criteria here.
	}
  }
}

//show_floors();

//helpers:
function parse_input() {
  //load contents:
  const fs = require("fs");
  const str = fs.readFileSync("../inputs/2016_day-11.txt", "utf-8");
  const sentences = str.split(".");

  let floors = sentences;

  console.log(floors[0]);
}

function show_floors() {
  let output = "";

  for (let i = 0; i < floors.length; i++) {
    const items = floors[i]
      .map((item) => `${item.material} ${item.type}`)
      .join(", ");

    output += `F${i + 1}: ${items || "."}\n`;
  }
  console.log(output);
}
