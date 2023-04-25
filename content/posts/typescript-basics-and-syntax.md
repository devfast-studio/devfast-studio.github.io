---
title: 1.1 TypeScript basics and syntax
date: 2023-04-24T16:00:00.000Z
tags:
  - 'Design Patterns, Data Structures, and Algorithms with TypeScript'
  - TypeScript
---

# 1.1 TypeScript basics and syntax

Welcome to chapter 1.1 of our course on Practical Modern Design Patterns, Data Structures, and Algorithms with TypeScript! In this section, we'll dive into the basics of TypeScript and its syntax. TypeScript is a powerful, statically-typed superset of JavaScript that extends the capabilities of JavaScript while also providing type safety. This allows for improved tooling, better maintainability, and more efficient development.

Let's start by exploring the fundamental concepts of TypeScript and its syntax.

## Setting up TypeScript

To begin with TypeScript, you'll need to install Node.js (if you haven't already). Once Node.js is installed, you can install TypeScript globally using the following command:

```shell
$ npm install - g typescript
```

Now, you can create a new TypeScript file (e.g., hello.ts) and compile it using the tsc command:

```shell
$ tsc hello.ts
```

This will generate a JavaScript file (hello.js) that can be executed using Node.js or included in an HTML file.

## TypeScript Basics

### Variables and Types

TypeScript supports all JavaScript data types, such as numbers, strings, booleans, and objects. However, TypeScript also introduces static typing, which allows you to declare the type of a variable explicitly.

For example, to declare a number variable, you would use the following syntax:

```typescript
let age: number = 30;
```

### Type Inference

TypeScript is also capable of inferring the type of a variable based on its initial value. This means that if you don't explicitly declare the type of a variable, TypeScript will automatically assign the most appropriate type based on the value you provide:

```typescript
let name = "John Doe"; // TypeScript infers the 'string' type
```

### &#xA;Functions

TypeScript makes it easy to define functions with typed parameters and return values. Here's an example of a simple TypeScript function:




```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John Doe")); // Output: Hello, John Doe!

```

 

### Interfaces

Interfaces in TypeScript help define the structure of an object, ensuring that the object adheres to a specific contract. Here's an example of a TypeScript interface:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(john); // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
```

### Classes

TypeScript introduces classes as a way to create reusable blueprints for creating objects. Classes in TypeScript support inheritance, access modifiers (public, private, protected), and more:

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Max");
dog.speak(); // Output: Max barks.
```

## Conclusion

In this first chapter, we covered the basics of TypeScript and its syntax. We learned about variables, types, type inference, functions, interfaces, and classes. This foundation will help you better understand the upcoming chapters, where we will explore more advanced concepts in TypeScript, such as generics, modules, and namespaces.

Stay tuned for the next chapter, where we will discuss the TypeScript compiler and configuration!
