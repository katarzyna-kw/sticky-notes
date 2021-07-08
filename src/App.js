import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <NotesList />
      </div>
    );
  }
};

export default App;