import Monster from "./Monster";
import Goblin from "./Goblin";
import Dragon from "./Dragon";

//Let vs Var vs Const
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(`Value of I: ${i}`);
  }
  console.log(`Outside of the block where i should exist, the value of I is: ${i}`);
}

sayHello();

console.log(`This is a problem because it can introduce errors and lessen how robust our code is. ES6 has added 2 new variable declaration keywords:

let - which has a syntax of:
  let x = 1;
for a fully declared and initialized variable, or:
  let y; 
for a declared variable. Let is block scoped, whereas var is not.

We also now  have access to CONSTANTS with const:
  const firstName = 'Mythic';
And unlike let and var, a const variable CANNOT be reassigned and must be initialed at the time of declaration.

Let's build another function below to demonstrate the block scope of the let keywordL
`);
let x = 1;
console.log(x);
const firstName = 'Mythic';
console.log(firstName);
function sayGoodbye() {
  for (let a = 0; a < 5; a++) {
    console.log(`The value of a inside block scope: ${a}`);
  }
  //console.log(`Value of a outside scope: ${a}`); //This line will throw an error as let makes a remain block scoped.
}

sayGoodbye();
//console.log(`Value of a outside of function block: ${a}`); //Block scoped by the let keyword.



// The problem with var is that it is not block scoped and we want to avoid the use of var.
console.log(`The take-away here:
Variables declared with VAR are scoped to the function. Variables declared with let are scoped to the block.
VAR when put in the main body is global.

`)

//Objects 

const person = {
  name: 'Mythic',
  walk: function () {

  },
  talk() {

  },
}
console.log(person.name);
//Access object properties with dot notation:
// person.name;
// person.talk();
// person.walk();

//Access object properties using bracket notation:
// person['name']; 

console.log(`
Above in our code we have displayed an object with 1 property and 2 Methods(a method is a function when it resides inside a class or object).

In traditional jScript, we declare a method like the first method (walk):
  walk: function() {logic in here},
Now with ES6, we can also declare a function like the second method(talk):
  talk() {logic in here},


Accessing Object Properties:

Dot Notation:
  person.named
  person.talk();
  person.walk();

Bracket Notation: 
  person['name'];


In terms of practicality, we use Bracket Notation when we are unsure ahead of time as to what method or property we will need to access:

const targetMember = 'name';

Imagine that the above target member is an input field on a form. Depending on what the user types into that input field, they're going to access a different property of the person object. That is the perfect time to use the bracket notation. So instead of hard coding:
  person['name'] = 'John';
We can pass instead:
  person[targetMember.value] = 'John';

If we know ahead of time what property or method we will access, we use the dot notation.


Next up:  
  Objects
`)


//The  'this' keyword:
const person2 = {
  name: 'Mythic',
  walk() {
    console.log(this);
  }
}

//This is a keyword in jScript that confuses many developers because 'this' doesn't behave like  'this' in other programming languages. In other programming languages, 'this' always returns a reference to the CURRENT object.

person2.walk();
console.log(`Here, the 'this' keyword did reference the current object.`);
//However
//Let's define a constant called walk and set it to person.walk:
const walk = person2.walk;
//Not that we are NOT calling the walk method, we are just getting a reference to this function.
//So walk is now a function:
console.log(walk);
console.log(`As you can see on the log above this line, our constant we created called 'walk' is set to the function walk() .

Now, let's see what happens when we call this function:
`);

console.log(walk());

console.log(`
  It returns undefined!  What's going on here???  
  We don't get a reference to the person object, we get undefined...and that is why we stated that 'this' behaves differently in javascript vs other programming languages. The value of 'this' is determined by the function that called it or better put -  The value of 'this' is determined by HOW the function is called.

  If we call a function as a Method() in an Object, 'this' will ALWAYS return a reference to that object. However - if we call a function as a standalone object, or outside of an object, this will return the global object which is the window object. The reason we go undefined rather than the global window object is because strict mode is enable in our react app by default.

  Now let's look at binding 'this':

  As we saw previously, if you call a function as a standalone object or outside of an object it will reference the global window object unless we have strict mode in use - then it will return undefined. We can however, fix this by binding 'this':

  In case this is new information - let me be clear that in jScript, functions ARE OBJECTS. Look at all the Methods() available to our person2 object when we use dot notation:

  person2. // Type that in the code space below:

  Notice that in the Methods() we find in dot notation, there is one called 'bind'. The bind method is described as follows:

    'For a given function, creates a bound function that has the same body as the original function. The 'this' object of the bound function is associated with the specified object, and has the specified initial parameters.'

  We can use the 'bind' method to bind a function to an object. But what does that mean?

    When we call 'bind', note the first argument - thisArg - what we pass here as an argument will determine the value of 'this'.
    So if we were to bind person2 to the walk method such as:
    const walk = person2.walk.bind(person2);
    The bind method will return a new instance of the walk function and set 'this' to point at the person2 object.





`)

const walk2 = person2.walk.bind(person2);

walk2();

console.log(`
  So now as you see above our console readout displays the function walk2() is bound to our person2 object and has access to its methods and properties. It no longer shows undefined.

  So with the bind method, we can set the value of 'this' to whatever argument we pass to the bind method. So when we use bind with person2 as an argument, we get a walk() function that is always attached to the person2 object.

  That is why when we then call walk2() we see it references the person2 object we bound it to.


  Next up we will look at Arrow Functions!


  ********************************************Arrow Functions****************************************

Perhaps one of the BEST features in modern jScript is => arrow functions, let's take a closer look at these. We'll start by 
defining a constant called square  as a traditional function that takes a number as a parameter and returns that number squared:

const square = function(number) {
  return number * number;
}

That is what it would look like in regular jScript, but with the revisions brought to us in ES6, we now have another way of creating this function:

const square = (number) => {
  return number * number;
}

Note that when the body of our function only has a single line and returns a value, we could make this code even shorter:
const square = number => number * number;

Which does the same thing as both of the other examples!



`)

const square = number => number * number;
console.log(`
So now we've coded the last example arrow function and will call it here: ${square(5)}

And as you see, it squares the number.

Now let's look at where arrow functions are extremely useful:
Let's imagine we have an array called jobs and each item has an id and a property called isAactive set to true or false:

  const jobs = [
    {id: 1, isActive: true },
    {id: 2, isActive: true },
    {id: 3, isActive: false},
  ]
Now let's imagine that we want to get a list of only the active jobs:
  We would call the jobs.filter() method, and the argument that we pass inside jobs.filter() is  a predicate function:
    jobs.filter(function(job) {})

    A function that takes a job object, and returns a true or false value. So when we call the filter() method, it iterates over the jobs array and passes each job object to the predicate function which has the job of determining if that job object should be returned from the filter method. So we would want to return job.isActive and if it returns true, we want to display it:

    jobs.filter(function(job) {return job.isActive; });
    And we want to store the list that has been filtered so we'd want to create a variable to store the results in:
    const activeJobs = jobs.filter(function(job) {return job.isActive; });

    This is the perfect place to use an arrow function, instead of how we have it written above, we could instead simply:

    const activeJobs = jobs.filter(job => job.isActive);
    Which does the same thing. Cleaner and easier to read.
`)

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
  { id: 4, isActive: false }
]

const activeJobs = jobs.filter(jobs => jobs.isActive);


activeJobs.forEach(job => {
  console.log(job);
});

console.log(`

Which displays each of the active jobs from the array!

Now we'll look at Arrow Functions and the 'this' keyword:


The first thing to understand about arrow functions is that they DO NOT   RE-BIND  'this':

  Let's start by creating a person object:
    const person3 = {
      talk() {
        console.log('this', this);
      }
    }

    So then when we call the person3 talk() method we should get a reference to the person3 object:
    person3.talk; 
    And we do, great. Now what happens if we wrap the console.log in a call to the setTimeout function?

    const person3 = {
      talk() {
        setTimeout(function() {
          console.log('this', this);
        },1000);
        
      }
    }
    So what is our output to the console when calling the person.3 talk() method?
    We get a reference to the WINDOW object, not person3!
      What's going on here? 
        Well the reason for this behavior, is that the callback function we've created in the setTimeout function is not a part of any object. And as discussed - when we call a stand-alone function which is outside of any objects - it will globally reference the global object, which is the window object.

        Which then leads to the question - How can we solve this? How can we have a reference to the person3 object INSIDE of this callback function?
          One possible solution, which was extensively used in the "old" days, was to create a var inside our talk() method but still outside of the callback function we have nested in the setTimeout() function.
              const person3 = {
                talk() {
                  var self = this;
                  setTimeout(function() {
                      console.log('self', self);
                  });
                }
              }
            And if we call this person3.talk() method now, the console will show a reference to the person3 object. 
            It's a valid solution and was the pattern used previously in the "olden times" so to speak.

            With arrow functions we no longer have to do this though! And the reason for that is Arrow Functions do NOT re-bind 'this'. In other words, if we change that callback function to an arrow function, it will inherit the 'this' keyword.
            
            Let's make an example below:

            const person4 = {
              talk() {
                setTimeout(() => {
                  console.log('this' when callback is an arrow function: , this);
                });
              }
            }

      The take-away is that Arrow Functions do not re-bind the 'this' keyword.
`);

const person3 = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log(`'var self referencing this inside the callback function:' - ${self}`);
    }, 500);
  }
}

person3.talk();

//Using an arrow function as a callback function for setTimeout allows this to reference the person4 object:
const person4 = {
  talk() {
    setTimeout(() => {
      console.log(`'this' when using an arrow function as a callback for setTimeout() : ${this}`);
    }, 600);
  }
}
person4.talk();


console.log(`

*****************************************Array.map() Method*******************************************

ES6 introduced many new features and one of the most-used by React developers is the Array.map() Method. We use it to render lists as you will see!

  Let's say we have an array called colors that has 3 items: red, green, blue.
    const colors = ['red', 'green', 'blue']; 
  We want to iterate over it and place each color into a list item (<li>color</li>) using the Array.map() method:

  colors.map((color) => {
    return '<li>' + color + '</li>';
  });

  The Array.map() method does NOT mutate the original array, so we want to declare a variable that will hold this new array we're creating:

  const items = color.map((color) => {
    return '<li> + color + '</li>';
  });

  Since we have only one parameter and one statement we can get further clean that up:

    const items = color.map(color => '<li>' +color +'</li>');

  Clean, concise and on one line.

`);

const colors = ['red', 'green', 'blue'];

const items = colors.map((color) => {
  return `<li>${color}</li>`;
});
console.log(items);

//A cleaner way of doing the same as above:
const items2 = colors.map(color => `<li>${color}</li>`);
console.log(items2);


console.log(`
******************************************************OBJECT DESTRUCTURING***********************************************
One of the modern jScript features we see a lot of in React Applications is Object Destructuring.
  Let's imagine we have an address object
    const address = {
      street: '',
      city: '',
      country: ''
    };

  Let's say that somewhere in our app, we need to extract the values of each of the properties, and store them each in separate variables:

    The typical method is 
      street = address.street;
      city = address.city;
      country = address.country;
    The main problem with this, is that it means creating the same dot notation code in multiple places, and with ES6 there is a cleaner way using object destructuring. Here's the syntax:
      const { street, city, country } = address;
    You can target as few or as many of the properties of the address object as you wish. Maybe you're only intersted in the street values:
      const { street } = address;
    If you wanted to assign the street property a new name to work with it say you wanted to name it st  you can assign an alias:
      const { street: st };
    Which then allows us to use the value stored in street by using the alias  st
    Very versatile! We will be seeing and using this Object Destructuring syntax extensively as we progress in our understanding  of React!




`);

const address = {
  street: 'Flourisant',
  city: 'San Antonio',
  country: 'Murica'
};

//Extract values with typical methodology:
const street = address.street;
const city = address.city;
const country = address.country;
console.log(`
Street:  ${street}
City:    ${city}
Country: ${country}
 `);

//Extract values using new Object Destructuring:
const { street: street1, city: city1, country: country1 } = address;
console.log(`
 Street:  ${street1}
 City:    ${city1}
 Country: ${country1}
 `);

//Creating an alias for a value using Object Destructuring:
const { street: st } = address;
console.log(`Street alias 'st': ${st}



Extremely powerful when used properly and we will be using this a LOT!
`);

console.log(`
  ********************************************SPREAD OPERATOR(...)*******************************************************
Another modern jScript operator that we use a LOT in React is the spread operator (...) - Let's say we have 2 arrays:

  const first [1, 2, 3];
  const second [4, 5, 6];

  Let's say we want to combine these 2 arrays. One method of combining them would be:
  
  const combined = first.concat(second); 
  
  This is the old method for doing this. Now in ES6 with the spread operator - we can write this code like this:

    const combined = [...first, ...second ];

  You may think that this is not a big difference, but what if we wanted to add an element to this new array? Something added say in the middle somewhere... It's very simple with the spread operator:
    const combined = [...first, 'a', ...second, 'b' ];


Using the spread operator, we can easily clone an array:

  const cloneFirst = [...first];
  Which will give you an exact clone of the first array.

We can also use the spread operator on objects:

  const firstObj = { name: 'Mythic' };
  const secondObj = { job: 'Programmer' };

  And then we want to combine those 2 objects, we can use the spread operator. Let's say you also wanted to add a location property to the new object, we can do that as well:
    const combineObjs = {...firstObj, ...secondObj, location: 'Australia' };

    Log it to the console and you'll see you have the properties from the first obj, the second obj, and the new property we added in:

  We can also make exact clones of objects using the spread operator:

    const clone = { ...first };
    Just that simple to clone an object(or array etc);
  
  
`);

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const combinedArr = [...firstArr, ...secondArr];
const cloneFirstArr = [...firstArr];

const firstObj = { name: 'Mythic' };
const secondObj = { job: 'programmer' };
const combinedObj = { ...firstObj, ...secondObj, location: 'Texas' };
const cloneFirstObj = { ...firstObj }

console.log(`

Examples of using the Spread Operator (...) to combine and clone both Arrays and Objects:

Arrays-
firstArr: ${firstArr}
secondArr: ${secondArr}
combinedArr = ${combinedArr}
cloneFirstArr = ${cloneFirstArr}

Objects-
firstObj: ${firstObj}
secondObj: ${secondObj}
combinedObj: ${combinedObj}
cloneFirstObj: ${cloneFirstObj}

`);


console.log(`
****************************************************************************************************************************
************************************************************CLASSES*********************************************************
****************************************************************************************************************************

We can use classes to hold common methods and properties that we will reuse over many objects. Say you had the following person object:

const person1 = {
  name: 'Mythic',
  walk() {
    console.log('walk');
  }
};

And then we want to create a second person object:

const person2 = {
  name 'Meredith',
  walk() {
    console.log('walk');
  }
};

We've had to re-write the walk method. Here it's only a line, but this is only a demonstration. In reality it could be 10 lines of code or even more. There's a better way that keeps us from having to double do, and that brings us to Classes. Classes allow us to store a group of properties and methods that we want many objects to be able to access and use, and allows us to link these other objects to those properties and methods that we have written once and stored in our class. Let's check that out:

class Person {

  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

Which allows us to create new person objects:

const person = new Person('Mythic');

Which creates a new Person which we've passed the name value as. If we look at it with dot notation, we notice we have access to both name property as well as the walk() method. Which also means that if we find bugs, there is only a single place where we need to go in order to fix that bug in the code.

`)

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person5 = new Person('Mythic');
console.log(`
From the new person created from our Person class:
${person5.name}
`)
person5.walk();

console.log(`
Next up let's look at Class Inheritance:



************************************************************************************************************************************************************************************************CLASS INHERITANCE*********************************************************
*************************************************************************************************************************************

Let's take the example from the last lesson (above) to the next level. Let's create a Teacher class:

class Teacher {
  teach() {
    console.log('Teaching....');
  }
}

Ok so now we have a class of Teachers that can teach, but all teachers should also be able to walk() as all teachers are persons. Lets look at that in more detail:
  In programming, we can establish relationships between classes and objects via Inheritance or via Composition. This is beyond the scope of our current topic, which is discussing Class Inheritance, but as a quick overview we will discuss both below:

  Inheritance -
    To make a long story short, when a child class inherits from a parent class, the child acquires all behaviors from the parent. Inheritance will make a class hierarchy you can imagin it as a tree of classes: Person> [Student] & [Employee]  Student and Employee both would inherit the properties of Person as they are both Persons.

  
  Composition -
    Composition is in contrast to inheritance, it enables the creation of complex types by combining objects(components) of other types, rather than inheriting from a base(parent) class. To put it simply, composition contains instances of other classes that implement the desired functionality. You could imagine composition as playing with Legos, while components are the Lego bricks.

  Inheritance vs. Composition -
    The main difference between inheritance and composition is in the relationship between objects:
      Inheritance - "is a" E.g. The car IS A vehicle.
      Composition - "has a" E.g. The car HAS A steering wheel.

    Inheritance is known as the tightest form of coupling in object-oriented programming. Changing a base class can cause unwanted side effects on its subclasses or even all over the codebase.

    Composition is a far looser coupling. Combining with Dependency Injection, it brings more flexibility and also allows us to change runtime behavior.

    They have differing purposes too:
      Inheritance - To design a class on what it is.
      Composition - To design a class on what it does.

    I encourage doing some googling of the term Inheritance vs Composition  to learn more.

    Now that we have a general understanding of the two, let's look at Class Inheritance in more detail.


We can have our Teacher Class inherit from the Person Class, and it will inherit the methods of the Person Class. How do we do that?

We can do this very easy by using the extends keyword and then the name of the class we wish to inherit from:

class Teacher extends Person {
  teach() {
    console.log('Is now teaching...');
  }
}

Then, if we create a Teacher object:

const teacher = new Teacher('Mythic');
You may have noticed that when creating the new teacher object, it has the need of a name, that is because we have declared that any person object that is created should have a name. The teacher object has inherited that from the Person Class. So we passed the name of the teacher in as 'Mythic'.

Now if you look at our teacher object using dot notation:
teacher.

You will notice that it has the property name and has access not only to its own teach() method, but also has access to the walk() method that it has inherited from the Person Class!

Now let's take this even further:

Let's imagine that when we create a teacher object, other than just their name, we also need to pass their degree. So in the teacher class we will need a constructor, and whenever we have a constructor in a child class, we will need to reference the constructor of the parent class. To do that, we will use the 'super' keyword:

class Teacher extends Person {
  constructor(name, degree){
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log('Is now teaching...);
  }
}

const teacher = new Teacher('Mythic', 'B.S. Comp Sci');

now if you look at the teacher object with dot notation:
teacher. 

You will notice we have 2 properties(name and degree) as well as 2 methods(walk() and teach());


As you will see in the next section, whenever  we create a component, we should have that component extend the base component that is defined in React. This is because the base component in React has a bunch of methods that we need in our components. This wraps up our work with classes for the moment, and we will now move into Modules.



Below is an output to console of the teacher class we created above:
`);

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log(`${this.name} is now teaching...`);
  }
}

const teacher = new Teacher('Mythic', 'B.S. Comp Sci');

console.log(teacher);
teacher.walk();
teacher.teach();

console.log(`
************************************************************************************************************************
*********************                           MODULES                                        *************************
************************************************************************************************************************

Previously we've created:

class Person {
  constructor(name){
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log('Is now teaching...');
  }
}

So this is starting to get a bit bloated, and it would be nice, a best practice even, to split this code across multiple files. This is what is called MODULARITY. Instead of writing all the code in one file, we write our code in multiple files and call each file a module(also referred to as Components). Pre-ES6, we didn't have the concept of MODULES natively inside jScript. This lack of modules let to many 3rd party solutions that tried to address this shortcoming. Now in ES6, we have native support for modules inside jScript itself.

Let's look at how we would modularize this application:

First we'd start by moving each class into a separate file, Since the structure of these notes depends on how we've written them to this point, I will be leaving them as they are.  For this demonstration we will create several new classes below and then move them into their own module areas. We will create:

Monster class

Dragon that inherits Monster

Goblin that inherits Monster

And move them each to a new file of their own:
`);

//Each of the classes (Monster, Dragon, Goblin) have all been moved to separate files.
console.log(`
We have now moved Monster, Dragon, and Goblin into their own files. We must now export them so that they are accessible.
We also need to import Monster(the parent class) to both Dragon.js as well as Goblin.js . 

Now that we've done that, let's create some monsters and check that it all is working:


`);

const monster1 = new Monster('Barfloo', 'Wendigo');

const dragon1 = new Dragon('Glimsharn', 'Dragon', 'Fire');

const goblin1 = new Goblin('FizzleFang', 'Fat and sickly', 'Goblin', 'Rusty Moon Dagger');

monster1.roar();
dragon1.fly();
goblin1.speak();

console.log(`
Now that we have created new monster objects and called their methods our console should have output above this line.

And they work perfectly. Remember to use the 'super' keyword when setting these up!


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////NAMED AND DEFAULT EXPORTS////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

As was said in the last lecture above, the objects that are defined in modules(components), are PRIVATE by default.

They are NOT accessible from the outside UNLESS we export them. Let's take a closer look at what exporting means.

In our newly created Goblin.js file, we will add a new function called promoteToCommander()


If you go look at the top of this file(index.js) where we are importing Goblin from Goblin.js, you can see that we
do not have access to our new method promoteToCommander(). However if we were to go back to Goblin.js and
we use the 'export' keyword on our new promoteToCommander() function... 

We can now import either promoteToCommander() or Goblin - so we can export one or more objects from a given module.
These are what are known as Named Exports. Which means what is exported has a name, for example, our 
promoteToCommander() method.

We also have the concept of the Default Export - which is the main export of the module. We typically use default exports if there is only a single object that the module needs to export. When importing a default export, we do not need to use the curly braces {} on our import statement.

Default -> import whateverName from './yourPath';
Named -> import {whateverName} from './yourPath';

It is also possible that a module has a default export as well as one or several named exports. In our goblin file
above, we have a default export (Goblin) as well as a named export (promoteToCommander()). In instances like this
we can use the following import statement:

  import Goblin, {promoteToCommander} from './Goblin.js';

This is a pattern that we see a LOT in React apps. For example in most every React app we'll see:
  import React, { Component } from 'react';

From the above example, we can see that react is the module, but notice it doesn't have to define a path-
that's because we only have to define paths on modules that we create. React is a default export of the react
module. 99% of the time we'll be using {Component} - because we want our custom components to extend the Component class.

`);



