let addbtn = document.querySelector('#addbtn')
addbtn.addEventListener('click',()=>{
  Shownotes();
 
  let addtxt = document.querySelector('#adddtxt')
  let notes = localStorage.getItem("notes");
   if(notes == null){
     noteObj =[];
   }else{
     noteObj = JSON.parse(notes);

   }
  noteObj.push(addtxt.value);
   localStorage.setItem("notes", JSON.stringify(noteObj))
   addtxt.value = '';
   Shownotes();
});

let Shownotes=()=>{
  let notes = localStorage.getItem("notes");
  if(notes == null){
    noteObj =[];
  }else{
    noteObj = JSON.parse(notes);

  }
  let html =' '
  noteObj.forEach(function(elm,ind){
    html+= `
    <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${ind+1}</h5>
        <p class="card-text">${elm}</p>
        <button id=${ind} onClick = dltnotes(this.id) class="btn btn-primary">Delete note</button>
    </div>
</div>
    `
  let notesElm = document.getElementById("notes");
  console.log(notesElm);
  if (noteObj.length !== 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerText = 'nothing';
    
  }

  })
}
function dltnotes(index){
console.log('i am deleting',index);
let notes = localStorage.getItem("notes");
if(notes == null){
  noteObj =[];
}else{
  noteObj = JSON.parse(notes);

}
noteObj.splice(index,1)
localStorage.setItem("notes", JSON.stringify(noteObj))
Shownotes()

}

let srctxt= document.querySelector('#srctxt').addEventListener('keyup',()=>{
let val= document.querySelector('#srctxt').value;
let notecard =document.querySelectorAll('.noteCard')
Array.from(notecard).forEach(function(elm){

let cardtxt= elm
if(cardtxt.children[0].textContent.indexOf(val)!= -1){
 elm.style.display ='block'
}else{
 elm.style.display ='none'
}
})
})
// row.children[0].textContent.indexOf(val)!= -1