import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";
import './index.css'

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
      doesMatchSearch: true
    };
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
  onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        return {
          ...note, 
          doesMatchSearch: true
        };
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(searchText);
        const descriptionMatch = description.includes(searchText)
        const match = titleMatch || descriptionMatch;
        return {
          ...note,
          doesMatchSearch: match
        };
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };
  deleteNote = (deleteId) => {
    const doNotDelete = (note) => note.id !== deleteId
    const updatedNotes = this.state.notes.filter(doNotDelete);
    this.setState({ notes: updatedNotes });
  };
  componentDidUpdate() {
    const savedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", savedNotes);
  }; 
  componentDidMount() {
    const savedNotes = localStorage.getItem("savedNotes");
    if (savedNotes) {
    const savedState = JSON.parse(savedNotes);
    this.setState({ notes: savedState });
  }
  };
  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList notes={this.state.notes} onType={this.onType} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;