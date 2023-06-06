const clock =  document.querySelector("h2#clock");



function setTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//정해진 시간에 매번 함수를 호출하는 기능
setTime();
setInterval(setTime, 1000);