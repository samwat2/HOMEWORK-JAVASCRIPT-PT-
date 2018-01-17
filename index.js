//problem 1

function Addition(x, y) {
	var sum= x + y;
	console.log(sum)	
}
Addition(10, 8)

function Subtraction(z, x) {
	var minus= z - x;
	console.log(minus)
}
Subtraction( 6, 7)

function Multiply (h, q) {
	var times= h * q;
	console.log (times)
}
Multiply (5, 4)

function Greetings (userName, age) {
	console.log('hello! my name is ' + userName + 'and my age is' + age)
}
Greetings('Sammy', 22)

var lastName = 'Watchman'
var firstName = 'Sammy '
console.log (firstName + lastName)

//problem 2

var carArray= [['VANQUISH', 'VALKYRIE', 'VANTAGE'],['FLY SPUR', 'BENTAYGA', 'CONTINENTALGT'], ['3 SERIES', 'XS SERIES', 'I8']];
for (var i = 0; i < carArray.length; i++) {
	if (i === 0) {
		console.log ('Aston Martin');
	} else if (i === 1) {
		console.log ('Bentley:');
	} else {
		console.log ('BMW:');
	}
	for (var j = 0; j < carArray.length; j++)
		console.log (carArray[i][j]);
}

//problem 3
function fav(answer) {
	console.log('what is your favorite foods?' + answer)
	if (answer = 100) {
		alert= 'you are under 100 character count'
		} else if (answer => 100) {
			alert= 'you are avout 100 character count.'
		}
}
var answer = prompt ("whats your favorite number?")


//problem 4
function userGreeting(name) {
	alert('hello, ' + name + '.');
}
var userName = prompt ('What is your name?');
userGreeting(userName);

// problem 5
function printGreeting(personName){
	console.log('Hello, my name is ' + personName + '.');
}
printGreeting('Sammy');

//problem 6
function behindTheDoor(answer) {

	if (answer === 'door1'){
		alert('goat!')
	} else if (answer === 'door2'){
		alert('jeep!')
	}else {
		alert ('can of worms!')
	}
}
var answer = prompt ('what are behind these doors1, door 2 or door3?');
behindTheDoor(answer);


//problem 7
function whatsYoName(name){
	
}