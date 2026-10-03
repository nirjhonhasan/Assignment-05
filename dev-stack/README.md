Project Name: Dev Stack
Build Your Perfect Development Stack
Dev Stack is a React-based web application where users can explore different web development technologies and select technologies to build their ideal development stack. The project provides a simple and interactive interface for exploring technologies by category.

=> Technologies Used
React.js
JavaScript (ES6)
CSS / Tailwind CSS
React Icons
React Toastify
JSON Data
Vite
React Hooks (useState, useEffect)
Responsive Design

=> Features
1. Explore Technologies
Users can explore different technologies and learn basic information about them, including their category, description, rating, difficulty level, and badge.
2. Build Your Own Stack
Users can select technologies and add them to their personal development stack. The selected technologies are displayed separately so users can easily see their choices.
3. Interactive User Experience
The application provides interactive buttons, responsive layouts, and toast notifications using React Toastify to give users feedback when they perform actions.

Answers of following questions:
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows to write HTML-like code of JavaScript.

2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data managed inside a component.

3. What does the useState hook do, and where did you use it in this project?
The useState hook is used to create and manage changing data inside a React component.
In my project, I used useState to store the technologies selected by user.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is used to perform side effects in a React component, such as fetching data or working with external APIs.
I used useEffect to load the technology data from the JSON file when the component loads.
For example:
5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.


6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI based on a condition.
In my project, I used it to show a message when the selected technology stack is empty.
{selectedTech.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <SelectedTechList />
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component passes data to a child component using props.
For example:
<TechCard tech={tech} />
Here, the parent sends tech data to TechCard.
A child can send information back to the parent by calling a function passed through props.

=> Project Summary
Dev Stack is a React project created to practice and demonstrate important React concepts such as:
Components
Props
State
Hooks
Conditional Rendering
.map()
Event Handling
Data Fetching
Responsive UI
React Toast Notifications

