/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE


function pingPong(table){
  // var count = {
  //   steps:0
  // };

  table.forEach(function(element, idx1){
    if(element !== null){
      element['steps']++;
       console.log("this is current ",element);
    }
    //  table.forEach(function(next, idx2){
    //   console.log("this is next ", next)
    //   var temp = current;
    //     current = next;
    //     next = temp;
     //
    //  })

  });

console.log("table after for each ", table)

for (var i = 0; i < table[0].steps; i++) {
  var current = table[i];
  var previous = table[i-1];
  var next = table[i+1];

    var temp = current;
    current = next;
    console.log("this is next ",next)
    next = temp;
    console.log("this is next ",next)


}
  // console.log(table)

  return table;
}
var table = [{steps: 0}, null, null, null];
console.log(pingPong(table));
console.log(pingPong(table));
