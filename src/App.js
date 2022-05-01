import React from "react";
import Card from './Components/UI/Card';

function App() {
  return (
    <Card>
      <h1>Cuauhtemoc's Digital Resume</h1>
      <Card>
        <h2>Contact me:</h2>
        <ul>
          <li>Email: cxreilly42@gmail.com</li>
          <li>Linkedin: Cuauhtemoc Reilly</li>
          <li>Github: cuauhtemoc-reilly-8178</li>
        </ul>
      </Card>
      <Card>
        <h2>About me:</h2>
        <p>Author, dreamweaver, and actor. Front-end and backend React and .NET web developer.</p>
        <h3>Education</h3>
        <p>BS Computer Science, Western Oregon University, grad. 2021</p>
        <h3>Philosophy</h3>
        <p>A short paragraph describing me.</p>
      </Card>
      <Card>
        <h2>Skills and abilities:</h2>
        <ul>
          <li>Proficiency with .NET framework and React.js library</li>
          <li>Great interpersonal skills and customer service experience</li>
        </ul>
        <h3>Languages:</h3>
        <ul>
          <li>Python</li>
          <li>C#</li>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </Card>
    </Card>
  );
}

export default App;
 