const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? ", (name) => {
  profile.name = name;

  rl.question("What's an activity you like doing? ", (activity) => {
    profile.activity = activity;

    rl.question("What do you listen to while doing that? ", (music) => {
      profile.music = music;

      rl.question("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (meal) => {
        profile.meal = meal;

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          profile.food = food;

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            profile.sport = sport;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              profile.superpower = superpower;

              generateProfile(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});

function generateProfile(profile) {
  console.log(
    `Name: ${profile.name}\n` +
    `Activity: ${profile.activity}\n` +
    `Music: ${profile.music}\n` +
    `Favorite Meal: ${profile.meal}\n` +
    `Favorite Food: ${profile.food}\n` +
    `Favorite Sport: ${profile.sport}\n` +
    `Superpower: ${profile.superpower}\n`
  );
}