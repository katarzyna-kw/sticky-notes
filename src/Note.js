import React, { Component } from "react";

class Note extends Component {
  updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editId = this.props.note.id;
    this.props.onType(editId, "title", updatedValue)
  };
  updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editId = this.props.note.id;
    this.props.onType(editId, "description", updatedValue)
  }
  render() {
    return (
    <li className="note">
      <input 
        className="note__title" 
        type="text" 
        placeholder="Title" 
        value={this.props.note.title}
        onChange={this.updateTitle}
      />
      <textarea 
        className="note__description"
        placeholder="Description..." 
        value={this.props.note.description}
        onChange={this.updateDescription}
      />
      <span className="note__delete">X</span>
    </li>
    )
  }
};

export default Note;