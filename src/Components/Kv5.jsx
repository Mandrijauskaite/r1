import { Component } from "react";

class Kv5 extends Component {

    constructor(props) {
      super();
      this.state = {color: 'black', skaicius : 0}; // pradines steito reiksmes
  }

  componentDidMount() {
    const skaiciusStorage = parseInt(localStorage.getItem('skaicius'));
    if (!isNaN (skaiciusStorage)) {
      this.setState({skaicius: skaiciusStorage})

    }
  }

    add = () => {
      const skaiciusPo = this.state.skaicius + 1;
        this.setState({skaicius: skaiciusPo});
        const json = JSON.stringify(skaiciusPo);
        localStorage.setItem("skaicius", json);
      };

      render() {
      return (
        <>
            Count: {this.state.skaicius}
            <button onClick={this.add}>+</button>
        </>
      )
    }
  }
  

export default Kv5;