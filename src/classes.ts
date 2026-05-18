// Interfaces
interface Point {
  x: number;
  readonly y?: number;
}

const point1: Point = {
  x: 10,
  y: 20,
};

// Interface with function type
interface MathFunc {
  (x: number, y: number): number;
}

const math1: MathFunc = (x: number, y: number): number => x + y;
const math2: MathFunc = (x: number, y: number): number => x - y;

// console.log(math1(23, 7))
// console.log(math2(23, 7))

interface PersonInterface {
  id: number;
  age: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  age: number;
  name: string;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    // console.log(`${this.name}'s id is ${this.id}, and she is ${this.age} years old`);
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

// const Obianuju = new Person(1, 23, "Obianuju")
// console.log(Obianuju.register());

// Subclasses
class UniLevel extends Person {
  level: string;

  constructor(id: number, age: number, name: string, level: string) {
    super(id, age, name);
    this.level = level;
    console.log(
      `${this.name}'s id is ${this.id}, and she is a ${this.age} years old ${this.level} student`,
    );
  }
}

const Obianuju = new UniLevel(1, 23, "Obianuju", "ND2");
// console.log(Obianuju.register());