// Version 1.0
// Variable for shaking the asciiart
var shaking = false
// Answer array
var answers = ['Yes', 'Most certainly', 'Definitely', 'Count on it',
				'No', 'Not in your wildest dreams', 'No way!', 'Sorry, no',
				'Maybe', 'Possibly', 'Who knows', 'The future is cloudy',
				'Why ask me?'
				]
// How many times will we shake the ball? Between 4 and 16 times
shakeTimes = 4 + Math.floor(Math.random()*13)

// this shows the ball in 'up' or 'down' position
function show8Ball() {
	console.clear()
	if (shaking) {console.log('\n')}
	console.log( '\
\n .-"""-.\
\n/   _   \\\
\n\|  (8)  |\
\n\\   ^   /\
\n \'-...-\'\
')
shaking = !shaking }

//show the ball a given number of times, then show answer
function shakeTheBall(times) {
	for (i = 0; i < times; i++) {
		setTimeout(function() {
			show8Ball();
		} , 500*i)
	}
	setTimeout(function() {
		console.clear()
		console.log(getAnswer())
	}, 500*times)
}

//return the answer we get
function getAnswer() {
	var whichAns = Math.floor(Math.random() * answers.length)
	return answers[whichAns]
}

// "Hi, I'm running for you'
console.log('Magic 8 ball shaking!')
// and in a bit, we will shake it
setTimeout(function() {shakeTheBall(shakeTimes)}, 1000)
