1. What is NPM?  
NPM is the default package manager for Node.js, a JavaScript runtime.  It makes it simple for developers to install and manage third-party tools and libraries that they can utilize for their projects. A command-line interface for different development tasks is also offered by NPM.    
2. What is SPA?  
Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application.  
3. What is the event loop?  
The event loop is a fundamental mechanism that enables the asynchronous execution of code. It's an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently.   (GeeksforGeeks)
4. What is the difference between export x and export default x? How do you import them differently?
If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default . If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports. (https://medium.com/@heshramsis)  
5. Why do you use className as a property in React and not class?    class is a reserved keyword in JavaScript, that is why we use className.  
6. Why should you not write the following? What will happen?  
<button onClick={setCounter(counter + 1)}> +1 </button>   The function setCounter(counter + 1) will be invoked immediately when the components render instead of waiting for the button click. wrap it in an arrow function to correct the code <button onClick={() => setCounter(counter + 1)}> +1 </button>  
7. What is object deconstruction and how is it connected to React components (example)?   Object destructuring functionality makes it possible to retrieve values from objects and assign them to variables in a more clear and concise manner. It is very useful when working with objects with several properties, like React component props.   
   Without object destructuring   
const UserProfile = (props) => {   
  const firstname = props.firstname;   
  const lastname = props.lastname;
  return (
    <div>
      <p>Firstname: {firstname}</p>   
      <p>Lastname: {lastname}</p>   
    </div>   
  );
};

   With object destructuring   
const UserProfile = ({ firstname, lastname }) => {
  return (
    <div>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
    </div>
  );
};   
8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?   This is possible by using JSX (JavaScript XML). It allows you to write markup that looks similar to HTML directly within your JavaScript code. Under the hood, a procedure known as transpilation converts JSX into standard JavaScript. It is customary to use a tool like Babel to translate JSX code into similar JavaScript code during the construction process. React can now comprehend and operate with the generated JavaScript thanks to this modification.   
9. What is async/await? Bring an example    async/await is a mechanism in JavaScript that makes working with asynchronous programming easier. It makes code easier to understand by giving asynchronous operations a more understandable and synchronous-like syntax.      
  const fetchJoke = async () => {   
    try {    
      const response = await fetch('https://api.chucknorris.io/jokes/random');   
      if (!response.ok) {   
        throw new Error('Failed to fetch joke');   
      }   
      const data = await response.json();    
      setJoke(data.value);    
    } catch (error) {    
      console.error('Error fetching Chuck Norris joke:', error.message);   
    }    
  };   

  useEffect(() => {   
    fetchJoke();   
  }, []);   
9. What is a Promise? Bring an example    
A Promise is a built-in object in JavaScript that represents the eventual completion or failure of an asynchronous operation, and its resulting value. Promises help manage and work with asynchronous code in a more organized and structured way.   

A Promise has three states:    

a. Pending: Initial state; the promise is neither fulfilled nor rejected.   
b. Fulfilled: The operation completed successfully, and the promise has a resulting value.    
c. Rejected: The operation failed, and the promise has a reason for the failure.    

const fetchData = new Promise((resolve, reject) => {    
  setTimeout(() => {   
    const data = { message: 'Data fetched successfully' };    
    resolve(data);   
  }, 1000);   
});   
fetchData   
  .then(result => console.log(result))   
  .catch(error => console.error(error));   
