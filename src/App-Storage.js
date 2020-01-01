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

  handleChange = e => {
    const file = e.target.files[0];
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    });
  };

  saveFile = () => {
    console.log("saveFile method");
    Storage.put(this.state.filename, this.state.file)
      .then(() => {
        console.log("successfully saved file");
        this.setState({ fileUrl: "", file: "", filename: "" });
      })
      .catch(err => {
        console.log("error uploading file,", err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Storage Demo</h1>
        <input type="file" onChange={this.handleChange}></input>
        <img alt="previewed file" src={this.state.fileUrl}></img>
        <button onClick={this.saveFile}>Save File</button>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
