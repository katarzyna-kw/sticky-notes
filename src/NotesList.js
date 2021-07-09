import Note from "./Note";

const NotesList = (props) => {
  const renderNote = (note) => <Note note={note} key={note.id} onType={props.onType}/>


  const noteElement = props.notes.map(renderNote);
  return   <ul className="notes-list">{noteElement}</ul>

};

export default NotesList;