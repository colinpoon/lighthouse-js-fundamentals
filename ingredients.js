const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let bananaBread = 1;
while (bananaBread.length < 9) {
    console.log(bananaBread);
    bananaBread++;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let r = 9; r >= ingredients.length; r--) {
    console.log(ingredients[r])
}
let bananaBread = 1;
while (bananaBread.length > 9) {
    console.log(bananaBread);
    bananaBread--;
}