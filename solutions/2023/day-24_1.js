/*
https://adventofcode.com/2023/day/24

ask: check for intersections in a 2-d grid, for hailstones moving at constant velocities. 

look for interesections when x || y >= 200000000000000 && x || y <= 400000000000000. 

solution: 
- go through each hailstone at time n.
- add velocity. 
- filter out each not in bound.
- compare i with remaining j, where j!=i (don't compare to itself).   
*/

/*
ds: an array of objects, with:
    {
    x, 
    y,
    z,
    vx,
    vy,
    vz
    }
*/

const fs = require("node:fs");
const input = fs.readFileSync("../../inputs/2023/day-24.txt", "utf-8");

let test_input = [
  {
    x: 0,
    y: 0,
    z: 0,
    vx: 1,
    vy: 1,
    vz: 0,
  },
  {
    x: 2,
    y: 0,
    z: 0,
    vx: -1,
    vy: 1,
    vz: 0,
  },
];

function parse(input) {
  return input
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [pos, vel] = line.split(" @ ");
      const [x, y, z] = pos.split(", ").map(Number);
      const [vx, vy, vz] = vel.split(", ").map(Number);

      return { x, y, z, vx, vy, vz };
    });
}

function solve(h) {
  //   const test_area = { min: 200000000000000, max: 400000000000000 };
  const test_area = { min: 200000000000000, max: 400000000000000 };
  let intersections = 0;
  let hailstones = h;

  let hailstones_to_check = hailstones.filter(
    (h) =>
      h.x >= test_area.min &&
      h.x <= test_area.max &&
      h.y >= test_area.min &&
      h.y <= test_area.max,
  );

  //preliminary check to avoid starting point intersections.
  for (let i = 0; i < hailstones_to_check.length; i++) {
    for (let j = 0; j < hailstones_to_check.length; j++) {
      if (i == j) {
        continue;
      } else {
        intersections += check(hailstones_to_check[i], hailstones_to_check[j])
          ? 1
          : 0;
      }
    }
  }

  //till you have valid hailstones to check:
  while (hailstones_to_check.length >= 2) {
    //compute new positions:
    for (let i = 0; i < hailstones_to_check.length; i++) {
      hailstones_to_check[i].x += hailstones_to_check[i].vx;
      hailstones_to_check[i].y += hailstones_to_check[i].vy;
    }

    //remake array to check:
    hailstones_to_check = hailstones_to_check.filter(
      (h) =>
        h.x >= test_area.min &&
        h.x <= test_area.max &&
        h.y >= test_area.min &&
        h.y <= test_area.max,
    );

    //check & count intersections:
    for (let i = 0; i < hailstones_to_check.length; i++) {
      for (let j = i + 1; j < hailstones_to_check.length; j++) {
        if (i === j) {
          continue;
        } else {
          intersections += check(hailstones_to_check[i], hailstones_to_check[j])
            ? 1
            : 0;
        }
      }
    }
  }

  return intersections;
}

//helper;
function check(obj1, obj2) {
  //accepts objects with x,y,z && vx, vy, vz.

  if (obj1.x == obj2.x && obj1.y == obj2.y) {
    return true;
  } else {
    return false;
  }
}

console.log(solve(parse(input)));
