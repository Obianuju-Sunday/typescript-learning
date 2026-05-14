"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Obianuju";
let age = 23;
let hobbies = ["Vlogging", "Traveling", "Cooking"];
let hasCommitedToLearning = true;
let hasCommitedToGitHub = false;
// Functions
function greetUju(name) {
    return "Good evening " + name + ", you are doing well.";
}
console.log(greetUju("Obianuju"));
// Tuple
let obianuju = ["Obianuju", 23];
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
const ujunwa = {
    id: 1,
    name: 'Obianuju'
};
//# sourceMappingURL=basics.js.map