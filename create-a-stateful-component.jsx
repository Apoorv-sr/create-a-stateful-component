class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    //see we already know the importance of state in react,state property is used to detect and render if there is any change done to the component i.e see here Stateful is the component name and if we want to declare its state then we have to declare it in the constructor like it is shown i.e. this.state={} i.e. it has to be created like a javascript object and the keys in the object are the state variables and if they are rendered on screen and if any change is done on the rendered variale inside the application then the change would be redered automatically and we need not refresh the page so this is the importance that we can traget a specific component outof many components being rendered on the screen and update and render only that component using the state property and state for a component stays till the lifecycle of that component
    //and also note that we need class component to declare state  
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
