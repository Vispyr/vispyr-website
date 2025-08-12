---
title: "Introduction"
description: "Introduction to the Vispyr observability platform"
order: 1
---

# Data Types

## Primitive Values

```js
'string'           // string
42                 // number
true               // boolean
undefined          // undefined
null               // null
Symbol('foo')      // symbol (ES6)
9007199254740992n  // bigint (ES9)
```

Primitive Values are:
- Immutable
- Are a value type
    - Cannot be referenced by multiple variables

## Reference Objects

```js
{ a: 1, b: 2 }     // simple object
[1, 2, 3]          // array
function foo() {}  // function
new String('foo')  // custom object 
```

Objects are:
- Mutable
- Are a reference type
    - A copy of the reference is shared between variables

## typeof

- A data type can be checked using the `typeof` operator alongside the data literal. This returns a string representation of the data type.

```js
typeof 24;             // 'number'
typeof 'Dog';          // 'string'
typeof false;          // 'boolean'
typeof {};             // 'object'
typeof undefined;      // 'undefined'
typeof function() {};  // 'function'


// Unexpected Behavior

typeof [];             // 'object'
typeof null;           // 'object'
typeof NaN;            // 'number'
```

- For arrays, `Object.isArray()` can be used to check its object type.

```js
Object.isArray([1, 2, 3]);       // true
Object.isArray({ a: 1, b: 2 });  // false
```

# Naming Conventions

## Legal
- https://launchschool.com/lessons/7377ece4/assignments/4a43f341

- Case-sensitive
- Any length
- Start with a unicode letter, an underscore, or a dollar sign
- Succeeding characters must be unicode letters, numbers, dollar signs, or underscores
- Cannot be a reserved word
    - https://262.ecma-international.org/5.1/#sec-7.6.1.1

Legal:

```
_count
$price
value
my_variable
otherVariable
```

Illegal:

```
1count
my#variable
```

## Idiomatic

### Non-constant Variables

- Use camelCase
- Start with a letter

Examples:
- `employee`
- `number`
- `fizzBuzz`
- `speedOfLight`
- `destinationURL` (`URL` is an acronym)
- `m00n`

### Constructor Variables

- Use PascalCase
- Start with a letter

Examples:
- `Cat`
- `BoxTurtle`
- `FlightlessBird`

### Magic Constant Variables

- All UPPERCASE
- Words separated by `_`.

Examples:
- `TODAY`
- `MINIMUM_AGE`

### Other Constants

- Depending on context and local styles, can use all styles

Examples:
- `employeeOfMonth`
- `HairyCat`
- `ABSOLUTE_PATH`

# Variable Scope
- https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7

## Lexical Scope
- "The source code defines the scope."
- A variable's scope is **lexical**, being determined by the environment in which it is declared.

## Block-Level

- Variables declared with `let` or `const` are scoped at the *block-level*, which makes them accessible between the `{}` where they are declared. If declared in the program's main scope, the variables are considered **global** and can be accessed throughout the entire program.

```js
let foo = "I'm a global variable";

if (true) {
  console.log(foo);  // Outputs
  let bar = "I'm scoped within this block";
}

console.log(bar);  // Throws a `ReferenceError` exception
```

## Function-Level

- Variables declared with `var` and function declarations are scoped at the *function-level*, which makes them accessible within the function where they are defined. If declared in the program's main scope, the varaibles are considered **global** and can be accessed throughout the entire program.

`var`
```js
function foo() {
  if (true) {
    var test = 'Successful';
  }

  console.log(test);  // Outputs
}

foo();
```

`function`
```js
function foo() {
  if (true) {
    function bar() {
      console.log('Test successful');
    }
  }

  bar();  // Outputs
}

foo();
```
  