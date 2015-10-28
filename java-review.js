var no =0;
var yes =0;

var question1 = prompt('Did I grow up in Washington?').toLowerCase();

if (question1 ==='yes' || question1 ==='y' || question1 ==='ye' || question1 ==='yeah') {
  alert('Correctomundo');
  console.log('The user answered correct with ' + question1);
  yes +=1;
} else {
  alert('Woops! You are wrong.');
  console.log('The user answered incorrect with ' + question1);
}

var question2 = prompt('Do I play drums?').toLowerCase();

if (question2 ==='yes' || question2 ==='y' || question2 ==='ye' || question2 ==='yeah') {
  alert('Correctomundo');
  console.log('The user answered correct with ' + question2);
  yes +=1;
} else {
  alert('Woops! You are wrong.');
  console.log('The user answered incorrect with ' + question2);
}

var question3 = prompt('Do I play computer games?').toLowerCase();

if (question3 ==='yes' || question3 ==='y' || question3 ==='ye' || question3 ==='yeah') {
  alert('Correctomundo');
  console.log('The user answered correct with ' + question3);
  yes +=1;
} else {
  alert('Woops! You are wrong.');
  console.log('The user answered incorrect with ' + question3);
}

var question4 = parseInt(prompt('How old am I?'));
console.log("This is the user's answer");
console.log(typeof(question4));
console.log("This is what we are validating");
console.log(typeof(20));

if (question4 === 20) {
  alert('Wow! Your guess was spot on! Nice job!')
  console.log('The user answered correctly with an answer of 20.');
  yes +=1;
  }else if (question4 > 20) {
  alert('Woops, you are a bit high on your guess!');
  console.log('The user answered incorrectly with ' + question4);
  }else if (question4 < 20) {
  alert('Woops, you are guessing to low!');
  console.log('The user answered incorrectly with ' + question4);
  }

alert('Congratulations, you got ' + yes + ' out of 4 questions correct! Nice job!');
alert('The correct answer for question 1 was yes! I did grow up in Washington.');
alert('The answer for question 2 was yes! I love drumming and I have been drumming for 7 years!');
alert('Question 3 is an obvious yes! Who does not love computer games?');
alert('The correct answer for question 4 was 20!');
