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
var today = new Date();
var todayYear = today.getFullYear();
var todayMonth = today.getMonth();
var todayDay = today.getDate();

function daysUntilDate(date){
  var numberOfDays;

  var difference = Date.parse(date) - today;
  numberOfDays = Math.ceil(((difference / (1000*60*60*24))));

  return numberOfDays;
}

function birthdayReminder(data){

  var remiders = data.map(function(person){
    var personDob = new Date(person.dob);
    var personDobYear = personDob.getFullYear();
    var personDobMonth = personDob.getMonth();
    var personDobDay = personDob.getDate();
    var nextBirthday = new Date();
    nextBirthday.setDate(personDobDay);
    nextBirthday.setMonth(personDobMonth);

    if(personDobMonth < todayMonth){
        nextBirthday.setYear(todayYear + 1);
      }else if(personDobMonth === todayMonth){
        if(personDobDay < todayDay){
          nextBirthday.setYear(todayYear + 1);
        }else{
          nextBirthday.setYear(todayYear);
        }
      }else {
        nextBirthday.setYear(todayYear);
      }

    return person.name + " birthday is in " + daysUntilDate(nextBirthday) + " days";
  })

  return remiders;
}
