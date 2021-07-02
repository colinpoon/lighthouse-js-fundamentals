const temperature = 1;

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
    console.log("You are eligible to vote.");
}