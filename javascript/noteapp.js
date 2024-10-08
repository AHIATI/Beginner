const box1 = document.getElementById("box");
const btn1 = document.getElementById("btn");

getNotes().foreach((notes)=>{
  const noteE1 = createNoteE1(note.id, note.content);
  boxE1.insertBefore(noteE1,btnE1);
});
function createNoteE1(id, content){
  const element = document.createElement("Textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;
}
