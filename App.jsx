import React, { useState, useCallback, useEffect } from 'react';
import './App.css'; // We'll add some basic styling later

function App() {
  // 1. useState for managing the random string
  const [randomString, setRandomString] = useState('');

  // Function to generate a random string
  const generateString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) { // Generate a 10-character string
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // 2. useCallback for memoizing the string generation function
  // This prevents the function from being re-created on every re-render
  // unless its dependencies change (in this case, there are none)
  const generateAndSetRandomString = useCallback(() => {
    setRandomString(generateString());
  }, []); // Empty dependency array means it's memoized once

  // 3. useEffect for initial string generation on component mount
  // And also if you wanted to do something specific when the string changes
  useEffect(() => {
    generateAndSetRandomString(); // Generate a string when the component first mounts
  }, [generateAndSetRandomString]); // Dependency array includes the memoized function

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random String Generator</h1>
        <p className="random-string-display">
          {randomString ? randomString : 'Click "Generate" to get a string!'}
        </p>
        <button onClick={generateAndSetRandomString}>
          Generate Random String
        </button>
      </header>
    </div>
  );
}

export default App;