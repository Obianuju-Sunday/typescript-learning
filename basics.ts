let name: string = "Obianuju";
let age: number = 23;
let hobbies: string[] = ["Vlogging", "Traveling", "Cooking"];
let hasCommitedToLearning: boolean = true;
let hasCommitedToGitHub: boolean = false;

// Functions
function greetUju(name:string):string {
    return "Good evening " + name + ", you are doing well."
}

console.log(greetUju("Obianuju"))









// Tuple
let obianuju: [string, number] = ["Obianuju", 23]

// enum
enum Direction1 {
    Up = 1,
    Down,
    Right,
    Left
}

console.log(Direction1.Right)

// Objects
type User = {
    id: number,
    name: string
}

const ujunwa: User = {
    id: 1,
    name: 'Obianuju'
}
