import React, {useState} from "react";

function CreateArea(props) {

  const [fullNote, setFullNote]= useState({
    title:"",
    content:""
  })


  
  function handleChange(event) {
    const newValue = event.target.value
    const newName = event.target.name
    setFullNote(function(preveValue){
      return {...preveValue, 
        [newName]:newValue}
    }
      )
    
  }

function handleClick (event){
  
  props.onAdd(fullNote)
  

  setFullNote({
    title: "",
    content: ""
  });
  
  event.preventDefault()
}




  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={fullNote.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={fullNote.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );

}
export default CreateArea;
