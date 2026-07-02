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

kevan helped me solve this mathematically. 

the idea being that if you have n objects, the best you can do is steps = ((n*2) - 3) steps, because:
-> you effectively only make progress of 1 unit; therefore, total trips are doubled. 
-> however, with the last two objects, you don't have to go down. so that saves you 3 steps: 
  -> come down, go up, come down, go up, come down gets saved to come down, go up (5-2 => 3).                 

*/

function solve(n_materials){
  return (
    ((4*n)-3)*4
  );
}
