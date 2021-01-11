const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
result = {
  nickname: "",
  activity: "",
  listening: "",
  meal: "",
  thingToeat: "",
  sport: "",
  superpower: ""
}
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  result.nickname = answer
  rl.question('What\'s an activity you like doing?', (answer) => {
    result.activity = answer
    rl.question('What do you listen to while doing that? ', (answer) => {
      result.listening = answer
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        result.meal = answer
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          result.thingToeat = answer
          rl.question('Which sport is your absolute favourite?', (answer) => {
            result.sport = answer
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              result.superpower = answer
console.log(`Your nickname is ${result.nickname}`);
console.log(`Your favorite activity is ${result.activity}`);
console.log(`You like listening to : ${result.listening}`);
console.log(`Your prefered meal of the day is : ${result.meal}`);
console.log(`Your favorite food is : ${result.thingToeat}`);
console.log(`Your favorite sport is : ${result.sport}`);
console.log(`Your superpower is : ${result.superpower}`);              
    rl.close();
});
});
});
});
});
});
});





