// Playing ping-pong can be really fun! Unfortunatelly after a long and exciting
// play you can forget who's service turn it is. Let's do something about that!
// Write a function that takes the current score as a string separated by : sign as an
// only parameter and returns "first" or "second" depending on whose service turn it is.
// If the game has finished it should return "finished".
// We're playing old-school, so the rule is that players take turn after every 5 services.
// That is until the score is 20:20 - from that moment each player serves 2 times in his turn.
// Example:
// service("0:0") // => "first"
// service("3:2") // => "second"
// service("21:20") // => "first"
// service("21:22") // => "second"


const service = (score) => {
  let arr = score.split(':')
  let total = parseInt(arr[0])+parseInt(arr[1])
  let gap = Math.abs(parseInt(arr[0])-parseInt(arr[1]))
  if ((gap>=2)&&(arr[0]>=21 ||arr[1]>=21 ) )return 'finished'
  if ( parseInt(arr[0] )> 19 && parseInt(arr[1]) >19) {

      if (parseInt(arr[0] )> parseInt(arr[1])) return 'second'
      else return 'first'
  }
  
  console.log(total);
  if (total%2 === 0) return 'first';
  else return 'second'
};

module.exports = service;
