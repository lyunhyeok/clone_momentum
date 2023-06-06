const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");
const greeting = document.querySelector("#greeting");

//반복되는 string은 변수를 저장해주는게 실수를 체크하기 쉽다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//local storage에 값이 있으면 form을 보여주면 안됌 -> h1 보여줘야함
function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 동작을 제어
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 을 숨겨줌
    paintGreeting(username);
}

//반복되는 구문은 함수로 만들어서 관리하는게 좋다.
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    //greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//test username if there is username or not
const savedUsername = localStorage.getItem(USERNAME_KEY);

//logic
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreeting(savedUsername);
}