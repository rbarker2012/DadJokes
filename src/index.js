import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke });
      });
  }
  render() {
    // console.log('----Render-----');

    return (
      <div>
        <button onClick={this.onTellJoke}>Tell Me A Joke</button>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
