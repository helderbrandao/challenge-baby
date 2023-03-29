import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button, {GENDER} from "./components/BtnGender";
import Card from 'react-bootstrap/Card';


function App() {
  const handleCallback = (data : string[]) => {
    //alert(`NAME FOR YOUR BABY IS ${data[3].toUpperCase()}`);
    setResult(data.length > 0 ? `${data[3].toUpperCase()}`: "");
  }

  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">

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
              margin=""
          />
        </span>
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
