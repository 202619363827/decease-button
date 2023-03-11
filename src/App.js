// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react"
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(<h1>0</h1>);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>
        <span style={{ color: "red" ,textAlign:"center"}}>{count}</span>
        

        
      </h1>
      <div className="buttons">
        <button className="increase-btn" onClick={handleIncrease}>
          Increase count
        </button>
        <button className="decrease-btn" onClick={handleDecrease}>
          Decrease count
        </button>
      </div>
    </div>
  );
}

