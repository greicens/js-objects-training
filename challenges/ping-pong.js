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

function pingPong(array){
  var ballIndex;
  var ball;
  array.forEach(function(element, index){
    if(element !== null){
      ballIndex = index;
      ball = element;
      element.steps++;
    }
  });
  console.log("this is ball index", ballIndex);
  console.log("this is ball.steps ", ball.steps);

  //if(array[ballIndex] !== null){
    if(ballIndex < array.length-1 && ball.steps <= 4){
      console.log("inside first if")
      var temp = array[ballIndex];
      array[ballIndex] = array[ballIndex + 1];
      array[ballIndex + 1] = temp;
      ballIndex++;
    }

    if(ballIndex <= array.length-1 && ball.steps > 4){
      console.log("inside second if")
      var temp = array[ballIndex];
      array[ballIndex] = array[ballIndex - 1];
      array[ballIndex - 1] = temp;
      ballIndex--;
    }
  //}
  return array;
}

// var table = [{steps: 0}, null, null, null];
table = [null, {steps: 7}, null, null]


console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
console.log(pingPong(table))
