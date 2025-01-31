document.querySelector("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo(); 
  }
});
let num=1
function addTodo(){
  const newEl=document.createElement("div");
  newEl.setAttribute("id", num);
  newEl.setAttribute("class", "todos");
  const input=document.querySelector("input").value;
  newEl.innerHTML="<div><h4 id='line'><input id='checkbox' type='checkbox' onclick='clicked(this)'>"+ input +"</h4></input></div><button class='btn2' onclick='deleteTodo("+num+")'>Delete</button>";
  num=num+1;
  const parentEl=document.querySelector("body")
  parentEl.appendChild(newEl);
  document.querySelector("input").value='';
}

function deleteTodo(id){
  const el=document.getElementById(id);
  el.parentNode.removeChild(el);
}
function clicked(checked){
  const parentel=checked.parentElement;
  if (checked.checked) {
    parentel.style.textDecoration = "line-through";
  } else {
    parentel.style.textDecoration = "none";
  }
  
}