import React from "react";
import Card from "./Components/UI/Card";
import MenuBar from "./Components/UI/MenuBar";

function App() {
  return (
    <div>
      <MenuBar/>
      <Card>
        <Card>
          <h2>About:</h2>
          <p>
            Author, dreamweaver, and actor. Front-end and back-end React and .NET
            web developer.
          </p>
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
            <li>Relational database development</li>
          </ul>
          <h3>Languages and Technologies:</h3>
          <ul>
            <li>Python</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Visual Studio suite</li>
          </ul>
        </Card>
      </Card>
    </div>
  );
}

export default App;
