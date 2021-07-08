import Note from "./Note";

const keepSearchMatches = (note) => note.doesMatchSearch;
const renderNote = (note) => <Note note={note} key={note.id} />

const NotesList = (props) => {
  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElement = searchMatches.map(renderNote);
  return   <ul className="notes-list">{noteElement}</ul>

};

export default NotesList;