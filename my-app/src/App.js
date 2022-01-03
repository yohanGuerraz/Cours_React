import "./App.css";
import Child from "./components/Child";
import React, { useState } from "react";

function App() {

    const expenses = [];
const clickHandler = () => {
    console.log('Coucou')
}
    const texte = 'otto';
    return (
        <div className="App">
            <Child txt={texte}/>
            <button onClick={clickHandler}> AFFICHER </button>
        </div>

    );
}

export default App;
