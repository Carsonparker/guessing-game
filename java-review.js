var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');

var no = 0;
var yes = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');

function firstQuestion() {


var question1 = prompt('Did I grow up in Washington?').toLowerCase();

  if (question1 ==='yes' || question1 ==='y' || question1 ==='ye' || question1 ==='yeah') {
    ans1.innerHTML = ('Correctomundo');
    ans1.className = 'green';
    img1.src='img/woohoo.jp.jpg';
    img1.width=200;
    img1.height=200;
    console.log('The user answered correct with ' + question1);
    yes +=1;
  } else {
    ans1.innerHTML = ('Woops! You are wrong.');
    console.log('The user answered incorrect with ' + question1);
    ans1.className = 'red';
  }
}

function secondQuestion() {


var question2 = prompt('Do I play drums?').toLowerCase();

  if (question2 ==='yes' || question2 ==='y' || question2 ==='ye' || question2 ==='yeah') {
    ans2.innerHTML = ('Correctomundo');
    ans2.className = 'green';
    img2.src='img/woohoo.jp.jpg';
    img2.width=200;
    img2.height=200;
    console.log('The user answered correct with ' + question2);
    yes +=1;
  } else {
    ans2.innerHTML = ('Woops! You are wrong.');
    console.log('The user answered incorrect with ' + question2);
    ans2.className = 'red';
  }
}

function thirdQuestion() {

var question3 = prompt('Do I play computer games?').toLowerCase();

  if (question3 ==='yes' || question3 ==='y' || question3 ==='ye' || question3 ==='yeah') {
    ans3.innerHTML = ('Correctomundo');
    ans3.className = 'green';
    img3.src='img/woohoo.jp.jpg';
    img3.width=200;
    img3.height=200;
    console.log('The user answered correct with ' + question3);
    yes +=1;
  } else {
    ans3.innerHTML = ('Woops! You are wrong.');
    console.log('The user answered incorrect with ' + question3);
    ans3.className = 'red';
  }
}

function fourthQuestion() {

var question4 = parseInt(prompt('How old am I?'));
console.log("This is the user's answer");
console.log(typeof(question4));
console.log("This is what we are validating");
console.log(typeof(20));

  if (question4 === 20) {
    ans4.innerHTML = ('Wow! Your guess was spot on! Nice job!');
    ans4.className = 'green';
    img4.src='img/woohoo.jp.jpg';
    img4.width=200;
    img4.height=200;
    console.log('The user answered correctly with an answer of 20.');
    yes +=1;
  } else if (question4 > 20) {
    ans4.innerHTML = ('Woops, you are a bit high on your guess!');
    console.log('The user answered incorrectly with ' + question4);
  } else if (question4 < 20) {
    ans4.innerHTML = ('Woops, you are guessing to low!');
    console.log('The user answered incorrectly with ' + question4);
    ans4.className = 'red';
  }
}

function fifthQuestion() {

var question5 = prompt('Is my favorite color red? Yes or no?').toLowerCase();

  if (question5 === 'yes' || question5 === 'y' || question5 === 'ye' || question5 === 'yeah') {
    ans5.innerHTML = ('Correctomundo');
    ans5.className = 'green';
    img5.src='img/woohoo.jp.jpg';
    img5.width=200;
    img5.height=200;
    console.log('The user answered correctly with ' + question5);
    yes +=1
  } else {
    ans5.innerHTML = ('Woops! You were wrong!');
    console.log('The user answered incorrectly with ' + question5);
    ans5.className = 'red';
  }
}

function sixthQuestion() {

var question6 = parseInt(prompt('What is my favorite number?'));

  while (question6 !==17) {
    ans6.innerHTML = ("That's not my number, guess again.");
    ans6.className = 'green';
    img6.src='img/woohoo.jp.jpg';
    img6.width=200;
    img6.height=200;
    question6 = parseInt(prompt('What is your guess?'));
  }
  if (question6 ===17) {
    ans6.innerHTML = ('Congratulations, that was the right answer!');
    console.log('The user answered correctly with ' + question6);
    yes +=1;
  }
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();

alert('Congratulations, you got ' + yes + ' out of 6 questions correct! Nice job!');
alert('The correct answer for question 1 was yes! I did grow up in Washington.');
alert('The answer for question 2 was yes! I love drumming and I have been drumming for 7 years!');
alert('Question 3 is an obvious yes! Who does not love computer games?');
alert('The correct answer for question 4 was 20!');
alert('The correct answer for question 5 was red!');
alert('THe correct answer for question 6 was 7!');
