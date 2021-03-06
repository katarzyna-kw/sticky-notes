import React, { Component } from "react";
import Note from "./Note";

const keepMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  const renderNote = (note) => <Note note={note} key={note.id} onType={props.onType} deleteNote={props.deleteNote} />

  const matches  = props.notes.filter(keepMatches);
  const noteElement = matches.map(renderNote);
  return   <ul className="notes-list">{noteElement}</ul>

};

export default NotesList;