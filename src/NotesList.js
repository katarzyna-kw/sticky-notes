import Note from "./Note";

const renderNote = (note) => <Note note={note} key={note.id} />

const NotesList = (props) => {
  const noteElement = props.notes.map(renderNote);
  return   <ul className="notes-list">{noteElement}</ul>

};

export default NotesList;