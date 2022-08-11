# React-Learning-Quiz-Kahoot
Make a quiz like kahoot application in React

## React Learning
----------------

### 1. Component and JSX?
A component is a function that returns a JSX element and is known as a functional component. This always need to be in a parent element wrapped <div>.
There are two ways to create components: 
- one way is by the functional component desribed above here
- the other way is in a class 
  
Companies like Facebook that use React have huge libraries with Components that they can re-use to make a new User Interface for instance.


### 2. Output of components
To show any output on the screen, after making the Component we need return it in the root App Component:
Let's say we made an info component
- " < Info / > "
- " < Info >< / Info > "
  
This way we can render the component to the app and it will show on the screen.


### 3. Check a condition in React with JS
In react we can make for example two variables:
const title = "This is a title";
const showTitle = false;

When we wanna render this we could check the condition first by doing:
  
< h1 >{showTitle ? title : ""}< /h1 >
  
The question mark will check the condition of showTitle first before rendering the title variable. 


### 4. Importing and Exporting
When we make separated components that are not in the root App component, we will need to import the files.
Also we have to export default that function to be able to import it.
When we make a new class -> do not forget to import React from "react"!


### 5. Accessing Props

Functional Component: 
In a function we can add props (properties) as a parameter and later on call them inside our render.
Props are read-only values inside the component. If you wanna modify the props, you can destructure them and then you will be able to modify them.

Class Component:
In a class Component the constructor needs a super(props) cause it needs to inherit and needs to manual overwrite it!
When you wanna render you need to use the (This.props.(name)) keyword to access the properties of the constructor.


### 6. State and useState
State is something stored temporary in the front-end and when we refresh the State on our page will dissapear. 
The State on the webpage is different for every user visiting the webpage, its not a global State. 

First we need to import useState from" React" to be able to use it.
Whenever we wanna setup a State in a functional Component, we need to create a const variable [count, setCount] with two values inside:
- first you define the actual variable that's going to store your State. (count)
- Second we define the name of the function that ur gonna use to update the State. (setCount)

1. To update a counter we can use the <button onCLick={updateCounter}>Update the Counter</button
2. Inside the function we would use: const = updateCounter = () => SetCount(count +1);

Whenever we press the button it will go to the function updateCounter and it will update the Setcount that we defined in our setState.

The same thing we can do inside our class Component - the only difference here is that we need to add this.state in our constructor  with the property we define:
1. this.state = { count: 0, };
2. <button onCLick={() => this.updateCounter}>Update the Counter</button








