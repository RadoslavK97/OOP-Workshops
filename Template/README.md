<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Library

### 1. Description

A library is a simple system for managing books. It is built with classes and follows the principles of **OOP Design**.

<br />

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 16.0+**
- Core Packages: **ESLint**

<br />

### 3. Goals

The **goal** is to fully implement two classes - `Book` and `Library` and validate and encapsulate their **state** - when it is initialized or changed through methods. To help you cover the business requirements of the classes you are provided with unit tests.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Exposing state for reading and writing through getters and setters.
- Protecting the state by implementing validation of values passed to setters
- Using static members for sharing state and behavior between class instances

<br />

### 4. Setup

#### Git repository

- Create a new **private** repository in GitHub.
- Clone your new repository somewhere on your computer.
- Open the `Template` archive and extract the `Template` folder somewhere in your local repository folder.
- Add, commit, and push everything.
- Open your browser and go to your repository's GitHub address.
- Check whether the `Template` folder has been uploaded.
- Add **@javascript-trainers** as a member with role **Reporter** to your repository.
- Finally and most importantly - **commit & push often**!

#### Running the project

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
2. Run `npm install` to restore all dependencies.
3. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.
   - `npm run test` (shorthand: `npm test` or `npm t`) - Runs the unit tests in the console.

<br />

### 5. Project structure

All of the code you will be working with is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. You will also notice that there are a couple of files in the `src/models` folder. Classes that hold the state of an application are often called models. A few enums exist in the `src/common` folder.

You need to fully implement the two models `Book` and `Library`. You can find the implementation requirements below. You are also provided with unit tests you can run with

```bash
npm test
```

or if you want to run the tests in interactive mode inside the browser you can type

```bash
npm run test:browser
```

Unit tests will report your progress with the implementation. They will show you what is the expected result of running a single piece of code and how it is different from your implementation. Some of the tests might look as if they are passing, but in fact, they can show a *false positive*. This happens when the test expectation is the code to throw an error if invalid data is passed, but in reality, the code throws because there are problems with the implementation.

Use the tests wisely.

<br />

### 6. The `Book` model

The `Book` model has only properties (state). You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `title` - cannot be **null**, **undefined** or an **empty string**, it should be a string with length in the range `[1-255]` symbols, including those numbers
- `genre` - should be a valid value of the `bookGenre` enum
- `pages` - should be a whole positive number
- `authors` - should be a non-empty string of 1 or more authors, separated by a comma. The property can be read and written as a string, i.e. 'David Brin', 'Arthur Clarke, Stephen Baxter', but its internal state should be an array of authors (strings). When writing the value of the `authors` property any spaces before and after authors' names should be ignored, i.e. '  Arthur Clarke, Stephen Baxter  ' should be recorded as `['Arthur Clarke', 'Stephen Baxter']` internally. Each author's name should be in the range `[1-40]` symbols inclusive.

When you create a new instance of the `Book` class, all four values will be passed to the constructor in the order specified above.

**Note:** All properties should be **readable** and **writable**.

<br />

### 7. The `Library` model

The `Library` model has no public properties (but has an internal state) and a couple of methods. Its role is to be an organizational unit for books.

The `Library` model should hold **shelves** of books, where each *shelf* is a `libraryShelf` option and each shelf contains a collection of books. Think of the different ways to represent this kind of information. You don't need to create any new functionality, you have the necessary tools to represent this kind of data.

Methods:

- `addBook(book, shelf)` - should add a book to a shelf if the **shelf** parameter is a valid `libraryShelf` option. You don't need to validate the book, nor do you need to check if it has already been added
- `printBooks()` - should print the existing shelves and all books in them, for example:

```txt
  == Ocean ==
Startide Rising, by David Brin, 345 pages

  == Clowns ==
IT, by Steven King, 1138 pages
```

<br />

### 8. Testing the `Book` and the `Library` classes

You can paste the following sample code inside the `main.js` file. Running this code should produce the output shown below. Indentation and book order is irrelevant.

```js
const book1 = new Book('IT', bookGenre.Horror, 1138, 'Steven King');
const book2 = new Book('Startide Rising', bookGenre.SciFi, 345, 'David Brin');

const library = new Library();

library.addBook(book1, libraryShelf.Clowns);
library.addBook(book2, libraryShelf.Ocean);

console.log(library.printBooks());
```

Sample output text:

```text
  == Ocean ==
Startide Rising, by David Brin, 345 pages

  == Clowns ==
IT, by Steven King, 1138 pages
```

### 9. Submitting your solution

You have until tomorrow, before the session starts, to submit your solution.  
Remove `node_modules` before you archive the `Template` folder. 
Finally, submit the archive **and** the URL of your repository to the appropriate activity.
*Ask your trainer for additional information!*