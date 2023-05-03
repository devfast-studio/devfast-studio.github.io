---
title: 1.2. TypeScript compiler and configuration
date: 2023-05-02T16:00:00.000Z
---

# 1.2. TypeScript compiler and configuration

Welcome to chapter 1.2 of our course  on Practical Modern Design Patterns, Data Structures, and Algorithms with TypeScript! In our previous post, we explored the essentials of TypeScript and its syntax. As a powerful, statically-typed superset of JavaScript, TypeScript enhances JavaScript's capabilities while providing type safety for better tooling, maintainability, and development efficiency.

In this post, we'll shift our focus to the TypeScript compiler and its configuration. Understanding how to configure the TypeScript compiler is crucial for effectively using TypeScript in your projects and ensuring that your code is compiled and executed correctly. We'll delve into the tsconfig.json file, the heart of TypeScript compiler configuration, and learn how to customize it to meet your project requirements. Let's get started by exploring the purpose and creation of tsconfig.json.

## Why tsconfig.json?

The TypeScript compiler, tsc, offers various options to customize the compilation process. To make these options consistent across a project and easily maintainable, it's essential to use a configuration file. tsconfig.json is that file, containing settings that determine the compiler's behavior, such as the JavaScript version to compile to, the module system, and the directories for input and output files.Creating a tsconfig.json File:
To create a tsconfig.json file, navigate to your project's root directory and run the following command:

```shell
tsc --init
```

This command generates a tsconfig.json file with default settings and comments explaining each setting. You can now customize this file according to your project's requirements.

## Understanding tsconfig.json Options

Let's explore some of the common options you might want to configure in your tsconfig.json file:

1. compilerOptions: This object contains settings that affect the TypeScript compiler's behavior. Some frequently used options include:
   * target: Specifies the JavaScript version that the TypeScript code will be compiled to (e.g., "es2017" or "esnext").
   * module: Determines the module system used for the generated JavaScript code (e.g., "commonjs" or "esnext").
   * strict: Enables strict type checking for stronger type safety.
   * sourceMap: Generates source map files to aid debugging by mapping compiled JavaScript code back to the original TypeScript code.
   * outDir: Sets the output directory for the compiled JavaScript files.
   * rootDir: Specifies the root directory of your TypeScript source files.
2. include: An array of file patterns that determine which files should be included during the compilation process. For example, \["src/\*\*/\*.ts"] includes all TypeScript files in the src directory and its subdirectories.
3. exclude: An array of file patterns that specify which files should be excluded from the compilation process. Commonly excluded files are those in the node\_modules directory.
4. extends: Allows you to extend an existing tsconfig.json file and inherit its configuration settings. This is useful when you want to share a base configuration across multiple projects or maintain different configurations for various environments (e.g., development and production).

Here's an example of a tsconfig.json file for a project:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

With this configuration, the TypeScript compiler will:

* Compile TypeScript code to ECMAScript 2017.
* Use the CommonJS module system for the generated JavaScript code.
* Enable strict type checking.
* Generate source maps for better debugging.
* Output compiled JavaScript files in the dist folder.
* Use the src folder as the root directory for TypeScript source files.
* Include all TypeScript files in the src directory and its subdirectories, excluding those in the node\_modules directory.

## Putting this Configuration to the Test

Let's create a simple TypeScript project to demonstrate how the provided tsconfig.json configuration works. We'll create a basic "Hello, World!" example using TypeScript, compile it using the given configuration, and then execute the generated JavaScript file.

* First, create a new directory for the project:

```shell
mkdir tsconfig-example
cd tsconfig-example
```

* Initialize a new npm project and install TypeScript:

```shell
npm init - y
npm install typescript --save - dev
```

* Copy the tsconfig.json we created in last section to this new directory tsconfig-example
* Create a src directory and a TypeScript file hello.ts inside it:

```typescript
// src/hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

* Compile the TypeScript code using the tsc command:

```shell
npx tsc
```

This will compile the hello.ts file according to the tsconfig.json configuration, generating a JavaScript file hello.js in the dist directory.

* Finally, execute the compiled JavaScript file using Node.js:

```shell
node dist/hello.js
```

* You should see the following output:

```shell
Hello, World!
```

This example demonstrates that the provided tsconfig.json configuration works for compiling TypeScript code into JavaScript, which can then be executed in a Node.js environment. You can further customize this configuration to suit the specific needs of your projects.

## Customizing tsconfig.json for Your Project

As you work on different projects, you may need to customize your tsconfig.json file to better fit your needs. Here are some tips for tailoring your configuration:

* Adjust the target and module options based on your project's requirements and the environments it will run in. For example, if you're targeting modern browsers or Node.js environments, you can use a higher ECMAScript version and module system.
* Enable or disable specific compiler options to enforce code quality and maintainability. For example, you can use the noImplicitAny option to ensure that all variables have an explicit type or the noUnusedLocals and noUnusedParameters options to catch unused variables and parameters.
* If your project has different environments (e.g., development and production), consider creating separate tsconfig.json files for each environment and using the extends option to share a base configuration.

## Using TypeScript with Build Tools and Task Runners

In real-world projects, you'll often use build tools and task runners like Webpack, Gulp, or Grunt to automate your build process. These tools usually have TypeScript integration through plugins or loaders, allowing you to configure TypeScript compilation as part of your build pipeline. Ensure you consult the documentation of the specific build tool or task runner you're using to learn how to integrate TypeScript.

## Conclusion

Understanding and configuring the TypeScript compiler through the tsconfig.json file is vital for making the most of TypeScript in your projects. By mastering the available options and knowing how to customize your configuration, you can ensure that your TypeScript code is compiled according to your specific requirements, leading to more efficient and maintainable applications.

We hope you found this guide on the TypeScript compiler configuration helpful. In our next post, we'll dive into Chapter 1.3: Types and Interfaces in TypeScript, where we'll explore how TypeScript's type system helps you create more robust and error-free code. Stay tuned!
