/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(date){
  var numberOfDays;
  var today = new Date();
  today = Date.now(today);
  var difference = Date.parse(date) - today;


  // var seconds = (difference / 1000) % 60 ;
  // var minutes = ((difference / (1000*60)) % 60);
  // var hours   = ((difference / (1000*60*60)) % 24);
  numberOfDays = Math.ceil(((difference / (1000*60*60*24))));

  return numberOfDays;
}

function birthdayReminder(data){

  var remiders = data.map(function(person){
    return person.name + " birthday is in " + daysUntilDate(person.dob) + " days";
  })

  return remiders;
}

console.log(daysUntilDate("12/25/2016"))
console.log(birthdayReminder([
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
]))
