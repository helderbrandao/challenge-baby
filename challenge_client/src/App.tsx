import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button, {GENDER} from "./components/BtnGender";


function App() {
  const handleCallback = (data : string[]) => {
    //alert(`NAME FOR YOUR BABY IS ${data[3].toUpperCase()}`);
    setResult(data.length > 0 ? `NAME FOR YOUR BABY IS ${data[3].toUpperCase()}`: "");
  }

  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Choose a gender to give you a baby name
        </p>
        <span style={{"display": "inline"}}>
          <Button
              parentCallback = {handleCallback}
              border="none"
              color="darkviolet"
              height = "100px"
              gender={GENDER.FEMALE}
              radius = "50%"
              width = "100px"
              children = "I'm a pink circle!"
              margin = "0 20px 0 0"
          />

          <Button
              parentCallback = {handleCallback}
              border="none"
              color="blue"
              height = "100px"
              gender={GENDER.MALE}
              radius = "50%"
              width = "100px"
              children = "I'm a pink circle!"
              margin=""
          />
        </span>
        <p>
          {result}
        </p>
      </header>
    </div>
  );
}

export default App;
