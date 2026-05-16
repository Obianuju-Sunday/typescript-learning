# TypeScript Learning - Day 2

## What I learned today:
- Generics in TypeScript allow us to create reusable components that can work with any data type
- We can define a generic function using angle brackets <T> to specify a type parameter
- The type parameter can be used within the function to ensure type safety while still being flexible
- When we call a generic function, we can specify the type we want to use.
- In the example, we created a generic function `getArray` that takes an array of items and returns a new array. We can specify the type of items when we call the function, such as `getArray<number>([1,2,3,4])` for an array of numbers or `getArray<string>(["Good food", "Money", "Peace"])` for an array of strings.
- Interfaces are similar to types but are more flexible and can be extended. They are often used to define the shape of objects and can be implemented by classes.
- Classes in TypeScript can implement interfaces to ensure they have certain properties and methods. This helps with code organization and type safety.
- Classes can also have constructors, which are special methods that are called when an instance of the class is created. 

## What I built:
- A generic function `getArray` that can take an array of any type and return a new array of that type
- Examples of using the generic function with both numbers and strings  
- A class that implements an interface to demonstrate how interfaces and classes work together in TypeScript
- A constructor in the class to initialize properties when creating an instance

## What I struggled with:
- Why the generic function did not throw an error when I pushed a string into the `numArray` which was supposed to be an array of numbers. I need to investigate this further to understand how TypeScript handles type safety in this case.
- Exactly how to use interfaces and classes together effectively, and when to choose one over the other in different scenarios.

## Tomorrow I'll learn:
- More about TypeScript with Express, including how to set up a server and handle routes with TypeScript.
