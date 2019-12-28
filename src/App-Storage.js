import React from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { Storage } from "aws-amplify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUrl: "",
      file: "",
      filename: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Storage Demo</h1>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
