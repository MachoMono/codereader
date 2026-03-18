export const languages = {
  python: {
    name: 'Python',
    icon: 'code',
    color: 'cyan',
    difficulty: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 'py-b-1',
            question: 'What does this code print?',
            code: [
              { number: 1, content: 'x = 5', type: 'default' },
              { number: 2, content: 'print(x)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'Nothing' },
              { letter: 'B', text: '5' },
              { letter: 'C', text: 'x' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: 'x = 5 stores the value 5 in the variable x. print(x) outputs whatever value is stored in x, which is 5.'
          },
          {
            id: 'py-b-2',
            question: 'What is the output of this code?',
            code: [
              { number: 1, content: 'print("Hello" + " World")', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'HelloWorld' },
              { letter: 'B', text: 'Hello World' },
              { letter: 'C', text: '"Hello" + " World"' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: 'The + operator concatenates strings in Python. "Hello" + " World" combines them into "Hello World".'
          },
          {
            id: 'py-b-3',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'x = [1, 2, 3]', type: 'default' },
              { number: 2, content: 'print(x[0])', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '1' },
              { letter: 'B', text: '2' },
              { letter: 'C', text: '3' },
              { letter: 'D', text: '[1, 2, 3]' }
            ],
            correct: 'A',
            explanation: 'Python uses zero-based indexing. x[0] gets the first element of the list, which is 1.'
          },
          {
            id: 'py-b-4',
            question: 'What is the result of 10 // 3 in Python?',
            code: [
              { number: 1, content: 'result = 10 // 3', type: 'default' },
              { number: 2, content: 'print(result)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '3.33' },
              { letter: 'B', text: '3' },
              { letter: 'C', text: '4' },
              { letter: 'D', text: '3.0' }
            ],
            correct: 'B',
            explanation: 'The // operator is floor division. It divides and rounds down to the nearest integer. 10 // 3 = 3.'
          },
          {
            id: 'py-b-5',
            question: 'What does this code print?',
            code: [
              { number: 1, content: 'name = "Alice"', type: 'string' },
              { number: 2, content: 'print(len(name))', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '5' },
              { letter: 'B', text: '4' },
              { letter: 'C', text: '"Alice"' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'A',
            explanation: 'len() returns the length of a string. "Alice" has 5 characters.'
          },
          {
            id: 'py-b-6',
            question: 'What is the output of this code?',
            code: [
              { number: 1, content: 'x = True', type: 'keyword' },
              { number: 2, content: 'print(not x)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'True' },
              { letter: 'B', text: 'False' },
              { letter: 'C', text: 'None' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: 'not True equals False. The not operator inverts the boolean value.'
          },
          {
            id: 'py-b-7',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'nums = [1, 2, 3, 4, 5]', type: 'default' },
              { number: 2, content: 'print(nums[1:4])', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '[2, 3, 4]' },
              { letter: 'B', text: '[1, 2, 3]' },
              { letter: 'C', text: '[2, 3, 4, 5]' },
              { letter: 'D', text: '[1, 2, 3, 4]' }
            ],
            correct: 'A',
            explanation: 'Slicing nums[1:4] returns elements from index 1 up to (but not including) index 4: [2, 3, 4].'
          },
          {
            id: 'py-b-8',
            question: 'What is printed by this code?',
            code: [
              { number: 1, content: 'x = "Python"', type: 'string' },
              { number: 2, content: 'print(x.lower())', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'PYTHON' },
              { letter: 'B', text: 'python' },
              { letter: 'C', text: 'Python' },
              { letter: 'D', text: 'PYpTHON' }
            ],
            correct: 'B',
            explanation: 'The lower() method converts all characters to lowercase. "Python".lower() = "python".'
          },
          {
            id: 'py-b-9',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'x = 15', type: 'default' },
              { number: 2, content: 'print(x % 4)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '3' },
              { letter: 'B', text: '3.75' },
              { letter: 'C', text: '4' },
              { letter: 'D', text: '2' }
            ],
            correct: 'A',
            explanation: 'The % operator returns the remainder. 15 divided by 4 is 3 with remainder 3.'
          },
          {
            id: 'py-b-10',
            question: 'What is the output of this code?',
            code: [
              { number: 1, content: 'a, b = 3, 4', type: 'default' },
              { number: 2, content: 'print(a ** b)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '12' },
              { letter: 'B', text: '81' },
              { letter: 'C', text: '64' },
              { letter: 'D', text: '34' }
            ],
            correct: 'B',
            explanation: '** is the exponentiation operator. 3 ** 4 means 3 to the power of 4, which is 3 x 3 x 3 x 3 = 81.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 'py-i-1',
            question: 'What is the output of this code?',
            code: [
              { number: 1, content: 'x = [1, 2, 3]', type: 'default' },
              { number: 2, content: 'y = x', type: 'default' },
              { number: 3, content: 'y.append(4)', type: 'function' },
              { number: 4, content: 'print(x)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '[1, 2, 3]' },
              { letter: 'B', text: '[1, 2, 3, 4]' },
              { letter: 'C', text: '[4]' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: 'In Python, lists are mutable. When you do y = x, both variables reference the same list in memory. Modifying y also modifies x.'
          },
          {
            id: 'py-i-2',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'def func(x, lst=[]):', type: 'function' },
              { number: 2, content: '    lst.append(x)', type: 'default' },
              { number: 3, content: '    return lst', type: 'default' },
              { number: 4, content: 'print(func(1))', type: 'function' },
              { number: 5, content: 'print(func(2))', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '[1] and [2]' },
              { letter: 'B', text: '[1] and [1, 2]' },
              { letter: 'C', text: '[2] and [2]' },
              { letter: 'D', text: '[1] and [1]' }
            ],
            correct: 'B',
            explanation: 'Default mutable arguments in Python are evaluated once at function definition. Both calls share the same list, so the second call appends to the existing list.'
          }
        ]
      }
    }
  },
  javascript: {
    name: 'JavaScript',
    icon: 'code',
    color: 'yellow',
    difficulty: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 'js-b-1',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'let x = 5;', type: 'default' },
              { number: 2, content: 'console.log(x);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'Nothing' },
              { letter: 'B', text: '5' },
              { letter: 'C', text: 'x' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'x = 5 stores the value 5 in the variable x. console.log(x) outputs the value stored in x, which is 5.'
          },
          {
            id: 'js-b-2',
            question: 'What is the result of this code?',
            code: [
              { number: 1, content: 'console.log(typeof "hello");', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '"string"' },
              { letter: 'B', text: 'string' },
              { letter: 'C', text: 'String' },
              { letter: 'D', text: 'text' }
            ],
            correct: 'B',
            explanation: 'typeof returns a string indicating the type. typeof "hello" returns "string" (without quotes in the actual output).'
          },
          {
            id: 'js-b-3',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'console.log(5 + "3");', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '8' },
              { letter: 'B', text: '"53"' },
              { letter: 'C', text: '53' },
              { letter: 'D', text: 'NaN' }
            ],
            correct: 'B',
            explanation: 'In JavaScript, + with a string performs concatenation. 5 + "3" becomes "5" + "3" = "53".'
          },
          {
            id: 'js-b-4',
            question: 'What is logged by this code?',
            code: [
              { number: 1, content: 'let arr = [1, 2, 3];', type: 'default' },
              { number: 2, content: 'console.log(arr.length);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '2' },
              { letter: 'B', text: '3' },
              { letter: 'C', text: '4' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'The length property returns the number of elements. [1, 2, 3] has 3 elements.'
          },
          {
            id: 'js-b-5',
            question: 'What is the output?',
            code: [
              { number: 1, content: 'console.log(10 === "10");', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'true' },
              { letter: 'B', text: 'false' },
              { letter: 'C', text: 'undefined' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: '=== is strict equality. It checks both value AND type. Number 10 !== string "10", so the result is false.'
          },
          {
            id: 'js-b-6',
            question: 'What does this code output?',
            code: [
              { number: 1, content: 'let x = [1, 2, 3];', type: 'default' },
              { number: 2, content: 'console.log(x[0]);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '0' },
              { letter: 'B', text: '1' },
              { letter: 'C', text: '[1]' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'JavaScript arrays are zero-indexed. x[0] accesses the first element, which is 1.'
          },
          {
            id: 'js-b-7',
            question: 'What is logged?',
            code: [
              { number: 1, content: 'console.log(Boolean(""));', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'true' },
              { letter: 'B', text: 'false' },
              { letter: 'C', text: '""' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'An empty string "" is falsy in JavaScript. Boolean("") returns false.'
          },
          {
            id: 'js-b-8',
            question: 'What does this output?',
            code: [
              { number: 1, content: 'let obj = { a: 1, b: 2 };', type: 'default' },
              { number: 2, content: 'console.log(Object.keys(obj).length);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '1' },
              { letter: 'B', text: '2' },
              { letter: 'C', text: '3' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'Object.keys() returns an array of the object keys. The object has keys "a" and "b", so length is 2.'
          },
          {
            id: 'js-b-9',
            question: 'What is the output?',
            code: [
              { number: 1, content: 'console.log(null == undefined);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'true' },
              { letter: 'B', text: 'false' },
              { letter: 'C', text: 'Error' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'A',
            explanation: '== (loose equality) considers null and undefined equal to each other, but not to any other value.'
          },
          {
            id: 'js-b-10',
            question: 'What is logged?',
            code: [
              { number: 1, content: 'let x = 5;', type: 'default' },
              { number: 2, content: 'x = x + "5";', type: 'default' },
              { number: 3, content: 'console.log(x);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '10' },
              { letter: 'B', text: '"55"' },
              { letter: 'C', text: '55' },
              { letter: 'D', text: '"105"' }
            ],
            correct: 'B',
            explanation: 'x = 5 + "5" uses string concatenation. 5 becomes "5", and "5" + "5" = "55".'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 'js-i-1',
            question: 'What is the output?',
            code: [
              { number: 1, content: 'const arr = [1, 2, 3];', type: 'default' },
              { number: 2, content: 'arr.push(4);', type: 'function' },
              { number: 3, content: 'console.log(arr);', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '[1, 2, 3]' },
              { letter: 'B', text: '[1, 2, 3, 4]' },
              { letter: 'C', text: 'Error' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'B',
            explanation: 'const prevents reassignment but not mutation. push() modifies the array in place, so arr becomes [1, 2, 3, 4].'
          },
          {
            id: 'js-i-2',
            question: 'What is logged?',
            code: [
              { number: 1, content: 'console.log([1, 2, 3].map(x => x * 2));', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '[2, 4, 6]' },
              { letter: 'B', text: '[1, 2, 3]' },
              { letter: 'C', text: '[2]' },
              { letter: 'D', text: 'undefined' }
            ],
            correct: 'A',
            explanation: 'map() creates a new array by applying the function to each element. Each element is multiplied by 2: [2, 4, 6].'
          }
        ]
      }
    }
  },
  react: {
    name: 'React',
    icon: 'code',
    color: 'cyan',
    difficulty: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 'react-b-1',
            question: 'What is the correct syntax for a functional component?',
            code: [
              { number: 1, content: 'function MyComponent() {', type: 'keyword' },
              { number: 2, content: '  return <h1>Hello</h1>;', type: 'default' },
              { number: 3, content: '}', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'function MyComponent() { return <h1>Hello</h1>; }' },
              { letter: 'B', text: 'MyComponent = function() { return "Hello"; }' },
              { letter: 'C', text: 'def MyComponent() { return "Hello"; }' },
              { letter: 'D', text: 'class MyComponent { render() { return <h1>Hello</h1>; } }' }
            ],
            correct: 'A',
            explanation: 'Functional components in React are JavaScript functions that return JSX. The function name should be capitalized.'
          },
          {
            id: 'react-b-2',
            question: 'How do you pass a prop called "name" to a component?',
            code: [
              { number: 1, content: '<MyComponent name="John" />', type: 'function' }
            ],
            options: [
              { letter: 'A', text: '<MyComponent name="John" />' },
              { letter: 'B', text: '<MyComponent props.name="John" />' },
              { letter: 'C', text: '<MyComponent {name: "John"} />' },
              { letter: 'D', text: '<MyComponent: name="John" />' }
            ],
            correct: 'A',
            explanation: 'Props are passed to components like HTML attributes. The prop name="John" is accessible in the component as props.name.'
          },
          {
            id: 'react-b-3',
            question: 'What does this component output?',
            code: [
              { number: 1, content: 'function Greeting() {', type: 'keyword' },
              { number: 2, content: '  return <p>Hello, World!</p>;', type: 'default' },
              { number: 3, content: '}', type: 'keyword' },
              { number: 4, content: '<Greeting />', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'Nothing' },
              { letter: 'B', text: 'Hello, World!' },
              { letter: 'C', text: '<p>Hello, World!</p>' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'B',
            explanation: 'The Greeting component returns a paragraph element. When rendered, it displays "Hello, World!" in the browser.'
          },
          {
            id: 'react-b-4',
            question: 'What is JSX?',
            code: [
              { number: 1, content: 'const element = <h1>Hello!</h1>;', type: 'default' }
            ],
            options: [
              { letter: 'A', text: 'A JavaScript syntax extension that allows HTML-like code' },
              { letter: 'B', text: 'A separate programming language' },
              { letter: 'C', text: 'A CSS framework' },
              { letter: 'D', text: 'A database query language' }
            ],
            correct: 'A',
            explanation: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files.'
          },
          {
            id: 'react-b-5',
            question: 'How do you access a prop named "title" inside a component?',
            code: [
              { number: 1, content: 'function Card(props) {', type: 'keyword' },
              { number: 2, content: '  return <h2>{props.title}</h2>;', type: 'default' },
              { number: 3, content: '}', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'props.title' },
              { letter: 'B', text: 'this.props.title' },
              { letter: 'C', text: 'Both A and B' },
              { letter: 'D', text: 'Neither, props cannot be accessed' }
            ],
            correct: 'A',
            explanation: 'In functional components, props is passed as an argument. You access props with props.propName syntax.'
          },
          {
            id: 'react-b-6',
            question: 'What is wrong with this code?',
            code: [
              { number: 1, content: 'const element = <div class="container">Content</div>;', type: 'default' }
            ],
            options: [
              { letter: 'A', text: 'class should be className in React' },
              { letter: 'B', text: 'Nothing is wrong' },
              { letter: 'C', text: 'div cannot be used' },
              { letter: 'D', text: 'Content should be in curly braces' }
            ],
            correct: 'A',
            explanation: 'In JSX, use className instead of class because class is a reserved word in JavaScript.'
          },
          {
            id: 'react-b-7',
            question: 'How do you render a list of items?',
            code: [
              { number: 1, content: 'function App() {', type: 'keyword' },
              { number: 2, content: '  const items = ["a", "b", "c"];', type: 'default' },
              { number: 3, content: '  return items.map(item => <li>{item}</li>);', type: 'function' },
              { number: 4, content: '}', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'Use the map() method to create elements' },
              { letter: 'B', text: 'Use a for loop' },
              { letter: 'C', text: 'Use a while loop' },
              { letter: 'D', text: 'Manually create each element' }
            ],
            correct: 'A',
            explanation: 'Use map() to iterate over arrays and create a React element for each item.'
          },
          {
            id: 'react-b-8',
            question: 'What is the purpose of keys in lists?',
            code: [
              { number: 1, content: 'items.map(item => <li key={item.id}>{item.name}</li>)', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'To help React identify which items have changed' },
              { letter: 'B', text: 'To style list items' },
              { letter: 'C', text: 'To sort items' },
              { letter: 'D', text: 'Keys are optional and serve no purpose' }
            ],
            correct: 'A',
            explanation: 'Keys help React optimize rendering by identifying which items have been added, removed, or updated.'
          },
          {
            id: 'react-b-9',
            question: 'What does this code render?',
            code: [
              { number: 1, content: 'function Counter() {', type: 'keyword' },
              { number: 2, content: '  const [count, setCount] = useState(0);', type: 'function' },
              { number: 3, content: '  return <p>Count: {count}</p>;', type: 'default' },
              { number: 4, content: '}', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'Count: 0' },
              { letter: 'B', text: 'Count: undefined' },
              { letter: 'C', text: 'Count: count' },
              { letter: 'D', text: 'Error' }
            ],
            correct: 'A',
            explanation: 'useState(0) initializes count to 0. The component renders "Count: 0".'
          },
          {
            id: 'react-b-10',
            question: 'Which is the correct way to handle a click?',
            code: [
              { number: 1, content: '<button onClick={handleClick}>Click me</button>', type: 'function' }
            ],
            options: [
              { letter: 'A', text: 'onClick={handleClick}' },
              { letter: 'B', text: 'onclick="handleClick()"' },
              { letter: 'C', text: 'onClick="handleClick"' },
              { letter: 'D', text: 'click={handleClick}' }
            ],
            correct: 'A',
            explanation: 'In JSX, event handlers use camelCase (onClick) and pass the function reference directly without parentheses.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 'react-i-1',
            question: 'What is the difference between state and props?',
            code: [
              { number: 1, content: 'function Parent() {', type: 'keyword' },
              { number: 2, content: '  return <Child name="John" />;', type: 'function' },
              { number: 3, content: '}', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'Props are passed from parent to child, state is managed within the component' },
              { letter: 'B', text: 'They are the same thing' },
              { letter: 'C', text: 'Props are for styling, state is for data' },
              { letter: 'D', text: 'State is read-only, props can be modified' }
            ],
            correct: 'A',
            explanation: 'Props are immutable data passed from parent to child. State is mutable data managed within a component using useState or this.state.'
          },
          {
            id: 'react-i-2',
            question: 'When does useEffect run by default?',
            code: [
              { number: 1, content: 'useEffect(() => {', type: 'function' },
              { number: 2, content: '  document.title = "Hello";', type: 'default' },
              { number: 3, content: '});', type: 'keyword' }
            ],
            options: [
              { letter: 'A', text: 'After every render' },
              { letter: 'B', text: 'Never' },
              { letter: 'C', text: 'Only on the first render' },
              { letter: 'D', text: 'Before the first render' }
            ],
            correct: 'A',
            explanation: 'Without a dependency array, useEffect runs after every render. Use an empty array [] to run only once.'
          }
        ]
      }
    }
  }
};

export const difficulties = [
  { id: 'beginner', name: 'Beginner', color: 'green' },
  { id: 'intermediate', name: 'Intermediate', color: 'yellow' }
];
