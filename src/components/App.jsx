import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [newNotes, setNewNotes] = useState([])

function addNote(note){
  setNewNotes(function(preveValue){
    return[...preveValue,note]
  })
}


function deleteNote(id) {

  setNewNotes(function(prevNote) {
    prevNote.filter(function(noteItem, index){
      return index !== id;
    }) 
  })
}



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      
     { newNotes.map(function(noteItem, index){
        return <Note 
        
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
        />
      })}      
      <Footer />
    </div>
  );
}

export default App;




//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
