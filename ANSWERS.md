- [ ] Why would you use class component over function components (removing hooks from the question)?

==> You would want to use a class component over a functional component when you want to utilize the React lifecycle (Mounting, Updating, Unmounting), situations where there is a collection of state data that will be periodically updated for example.

- [ ] Name three lifecycle methods and their purposes.

==> 1) componentDidMount():  A method used on a class component that typically initializes data on the component once it is mounted.  Basically, if the componentDidMount(), execute this block of code.

==> 2) this.setState({}):  Method used to update state data via the React lifecycle and not modifying it directly for the sake of immutability.  

==> 3) componentWillUnmount():  Method called to execute cleanup code once the component is unmounted/moves to the death/un-mounting phase.

- [ ] What is the purpose of a custom hook?

==> Custom hooks are used to apply non-visual behavior using stateful logic (toggling data, increasing/decreasing count, etc.).

- [ ] Why is it important to test our apps?

==> Testing apps prevents having multiple bugs in your program later on while also testing for efficiency of the app, helping to prevent data delays, clean asynchronous data fetches, consistency.  It also serves as a safeguard/alert for programmers and the nature of their data and its manipulation/type, helps with changes/refactors.