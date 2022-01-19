const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable. ", (answer) => {
  console.log(`Name you inputted: ${answer}`);
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Activity you inputted: ${answer}`);
    answers.push(answer);
    rl.question("What kind of music do you listen to while doing that? ", (answer) => {
      console.log(`You listen to: ${answer}`);
      answers.push(answer);
      rl.question("Which meal is your favorite (eg: dinner, brunch etc.) ", (answer) => {
        console.log(`Your favorite meal is: ${answer}`);
        answers.push(answer);
        rl.question("What's your favorite thing to eat for that meal? ", (answer) => {
          console.log(`Your favorite thing to eat for your favorite meal: ${answer}`);
          answers.push(answer);
          rl.question("Which sport is your absolute favorite? ", (answer) => {
            console.log(`Your favorite sport: ${answer}`);
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Your superpower: ${answer}`);
              answers.push(answer);
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, eating ${answers[4]} for ${answers[3]}, 
prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});