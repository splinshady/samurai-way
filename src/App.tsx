import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";


function App() {
  return (
    <div className="App">
        <Accordion titleForAccordion={'Menu'} collapsed={true}/>
        <Accordion titleForAccordion={'Users'} collapsed={false}/>
        <Rating valueOfStar={5}/>
    </div>
  );
}

export default App;
