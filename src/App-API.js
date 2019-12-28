import React from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { API } from "aws-amplify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  async componentDidMount() {
    try {
      const data = await API.get("peopleapi", "/people");
      console.log(data);
      this.setState({ people: data.people });
    } catch (err) {
      console.log("Unable to retrieve people", err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>People</h1>
        {this.state.people.map((person, i) => {
          return (
            <div key={`person-${i}`}>
              <h2>Name: {person.name}</h2>
              <p>Hair Colour: {person.hair_color}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
