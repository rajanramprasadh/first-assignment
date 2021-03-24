import React, { useState } from 'react';
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  
  const [username, setUsername] = useState('Ram');

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <UserInput onchange={usernameChangeHandler} username={username} />
      <UserOutput userName={username} />
      <UserOutput userName={username} />
      <UserOutput userName={username} />
      <UserOutput userName={username} />
    </div>
  );
}

export default App;
