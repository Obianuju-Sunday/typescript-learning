type User= {
    firstName: string,
    lastName: string,
    age: number
}

const spinster1: User = {
    firstName: "Obianuju",
    lastName: "Sunday",
    age: 23,
}

const spinster2: User = {
    firstName: "Joy",
    lastName: "Sunday",
    age: 20,
}

function printObject(lady: User){
    console.log(lady.age)
}

printObject(spinster2);