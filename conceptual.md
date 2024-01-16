### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a frontend framework. You utilize it to create reusable components and make building modular applications easier

- What is Babel?
Babel is a standalone library that transpiles JSX

- What is JSX?
An extension of JavaScript that lets us create HTML elements inside of JS code

- How is a Component created in React?
You create a component by using a JS function which includes some HTML properties. It is exported and then imported into the main application to display in the document.

- What are some difference between state and props?
Props are stateless variables that are passed to a component from the parent. State is a variable that can change with interacion on the app. It is managed directly by the component and persists through re-rendering of the application.

- What does "downward data flow" refer to in React?
This refers the the passing down of data from parent components to the children. This can include both state and prop variables.

- What is a controlled component?
A controlled component is one that takes its values from props and affect changes with callbacks. The parent controls the component through callbacks and state.

- What is an uncontrolled component?
An uncontrolled components are ones that store it's own state internally and interacts with the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
Key props are used to help react identify when and which component has changed to be managed appropriately.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Since arrays are mutable it is not recommended to use their index positions as keys. This can cause and unstable application and affect performance

- Describe useEffect.  What use cases is it used for in React components? useEffect is a hook that allows users to run side effect like calling to an API, changing the DOM, etc

- What does useRef do?  Does a change to a ref value cause a rerender of a component? useRef creats a mutable object whose value is set to whatever is passed into it. The object persists as long as the parent component does. It does not cause a rerender of the component if changed.

- When would you use a ref? When wouldn't you use one?
You would want to use a useRef when changing the DOM element directly without having the application rerender. You would not want to use them in class based components.

- What is a custom hook in React? When would you want to write one? Custom hooks are way to refactor your code if you are using the same code across many different components. This is great for things that have shared functionality across various components in your application.
