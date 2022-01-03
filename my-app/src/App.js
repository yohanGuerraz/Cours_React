import logo from "./logo.svg";
import Expen from "./components/Expen.js";
import "./App.css";

function App() {

    const expenses = [];

    const texte = '';
  return (
    <div className="App"> 
      <Child txt={texte}/>

      <Expen
      
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      
      ></Expen>

    <Expen
      
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      
      ></Expen>

<Expen
      
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      
      ></Expen>
      <Expen
      
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      
      ></Expen>
    </div>
  );
}

export default App;
