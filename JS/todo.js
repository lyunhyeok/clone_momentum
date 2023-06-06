const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

function deleteToDo(event){
    const deleteList = event.target.parentElement;
    deleteList.remove();
}

function paintToDo(newToDo){
    //html에 list item 추가
    const addLi = document.createElement("li");
    const addSpan = document.createElement("span");
    const addButton = document.createElement("button");

    addButton.innerText = "❌";
    addButton.addEventListener("click", deleteToDo);
    addSpan.innerText = newToDo;

    //addLi는 span 자식속성을 가지게됨
    addLi.appendChild(addSpan);
    addLi.appendChild(addButton);
    
    todoList.appendChild(addLi);    
    console.log(addLi);
}

function onToDoSubmit(event){
    //Form 태그에서 기본동작인 새로고침이 이루어지지 않음
    event.preventDefault();

    const newToDo = todoInput.value;
    todoInput.value = "";
    paintToDo(newToDo);
}


todoForm.addEventListener("submit", onToDoSubmit);
