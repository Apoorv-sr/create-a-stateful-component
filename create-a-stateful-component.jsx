class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    //see we already know the importance of state in react,state property is used to detect and render if there is any change done to the component i.e see here Stateful is the component name and if we want to declare its state then we have to declare it in the constructor like it is shown i.e. this.state={} i.e. it has to be created like a javascript object and the keys in the object are the state variables and if they are rendered on screen and if any change is done on the rendered variale inside the application then the change would be redered automatically and we need not refresh the page so this is the importance that we can traget a specific component outof many components being rendered on the screen and update and render only that component using the state property and state for a component stays till the lifecycle of that component
    //and also note that we need class component to declare state  
    //Note that If you want to access a state value within the return of the render method, you have to enclose the value in curly braces. but if you want to access outside of return in render method then that can be treated as a normal javascript and curly braces not required.
    //state is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.
    // Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.
    this.state={
        firstName:"Apoorva Singh"
      }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
