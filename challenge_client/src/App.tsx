import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import BtnGender, {GENDER} from "./components/BtnGender";
import Card from 'react-bootstrap/Card';
import {FormSelect} from "react-bootstrap";


function App() {

  const selInput = useRef(null);


  const handleCallback = (selGender:string, data : []) => {
    //alert(`NAME FOR YOUR BABY IS ${data[3].toUpperCase()}`);
    //console.log(data);
    setGender(selGender)
    setEthnics(data);
    setOptEthnics();
  }

  const setOptEthnics = () => {
    return ethnics.map((ethnic) => {
      return <option value={ethnic}>{ethnic}</option>;
    });
  }

  const handleShowBabyName = (data : string[] ) => {
    setResult(data.length > 0 ? `${data[3].toUpperCase()}`: "");
  }

  const handleClick = () => {
    fetch('http://localhost:8080/names/' + gender + '/ethnic/' + ethnic)
        .then(response => response.json())
        .then(data => handleShowBabyName(data));
  }

  const handleChange = (e : object) => {
    debugger;
    let select = selInput.current;
    if(select != null)
      setEthnic(select["value"]);
  }

  const [result, setResult] = useState("");
  const [gender, setGender] = useState("");
  const [ethnics , setEthnics] = useState([]);
  const [ethnic , setEthnic] = useState("");

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Choose a gender to give you a baby name
        </p>
        <span style={{"display": "inline"}}>
          <BtnGender
              parentCallback = {handleCallback}
              border="none"
              color="darkviolet"
              height = "100px"
              gender={GENDER.FEMALE}
              radius = "50%"
              width = "100px"
              margin = "0 20px 0 0"
          />

          <BtnGender
              parentCallback = {handleCallback}
              border="none"
              color="blue"
              height = "100px"
              gender={GENDER.MALE}
              radius = "50%"
              width = "100px"
              margin = "0 20px 0 0"
          />

          <button onClick={handleClick}>GENERATE</button>
        </span>

        <select
            ref={selInput}
            className="form-control"
            aria-label="Floating label select example"
            onChange={handleChange}>
          <option defaultValue="-1" disabled selected>
            -- Select Ethnic --
          </option>
          {setOptEthnics()}
        </select>
        <Card style={{ width: '18rem', marginTop: '2rem' }}>
          <Card.Img variant="top" src="img.png" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>Baby Name</Card.Title>
            <Card.Text style={{ color: 'black' }}>
              {result}
            </Card.Text>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
