import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    }
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });    
  };
  onType = (editId, updatedKey, updatedValue) => {
    const updateOnIdMatch = (note) => {
      if (note.id !== editId) {
        return note
      } 
      else if (updatedKey === "title") {
        return {
          ...note,
          title: updatedValue 
        }
      } else {
        return {
          ...note, 
          description: updatedValue
        }
      }
    };
    const updatedNotes = this.state.notes.map(updateOnIdMatch)
    this.setState({ notes: updatedNotes });
  };
  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote}/>
        <NotesList notes={this.state.notes} onType={this.onType}/>
      </div>
    );
  }
};

export default App;