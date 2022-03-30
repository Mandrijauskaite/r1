import React from 'react';
import ReactDOM from 'react-dom';

const Kvadratas = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

ReactDOM.render(<Kvadratas />, document.getElementById('root'));