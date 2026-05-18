// Generics
function getArray <T>(items: T[]) {
    return new Array<T>().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["Good food", "Money", "Peace"])

strArray.push("hello")

console.log(numArray);
console.log(strArray);
