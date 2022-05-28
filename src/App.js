import React from "react";
import "./styles.css";
import Test from "./Test";

const divStyle = {
  color: "blue"
};

export default function App() {
  const [myMap, setMyMap] = React.useState([{ a: 1, b: 2, c: { d: 1 } }]);

  const changeKey = () => {
    let valHere = myMap;
    valHere[0].c.d = 3;
    setMyMap(valHere);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={changeKey}>
        <p>Click Me!</p>
      </button>
      {myMap.map((item) => {
        return <p>{item.c.d}</p>;
      })}
      <div style={{ marginTop: 20 }}>
        <Test />
      </div>
      <span style={divStyle}>Some Text</span>
      <p className="test2">Some Other Text</p>
      <p style={{ marginTop: 100, color: "green" }}>Some More Text</p>
    </div>
  );
}
