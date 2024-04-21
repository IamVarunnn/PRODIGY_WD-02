let timer = document.querySelector(".timer");
let stopBtn = document.querySelector(".stop");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");


let msec = "0";
let sec = "0";
let min = "0";

let timerId = null;


startBtn.addEventListener("click",()=>{
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);


});
stopBtn.addEventListener("click",()=>{
   clearInterval(timerId);
});
resetBtn.addEventListener("click",()=>{
    clearInterval(timerId);
    timer.innerHTML = `00:00:00`;
    msec= sec = min = "0";
});

function startTimer(){
    msec++;
    if(msec==100){
        msec = "0";
        sec++;
        if(sec==60){
            sec = "0";
            min++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}`: sec;
    let minString = min < 10 ? `0${min}`: min;
    

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`

}


 
// let timer = document.querySelector(".timer");
// let stopBtn = document.querySelector(".stop");
// let startBtn = document.querySelector(".start");
// let resetBtn = document.querySelector(".reset");

// let msec = 0;
// let sec = 0;
// let min = 0;

// let timerId = null;

// startBtn.addEventListener("click", () => {
//     if (timerId !== null) {
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10);
// });

// stopBtn.addEventListener("click", () => {
//     clearInterval(timerId);
// });

// resetBtn.addEventListener("click", () => {
//     clearInterval(timerId);
//     timer.innerHTML = `00:00:00`;
//     msec = sec = min = 0;
// });

// function startTimer() {
//     msec++;
//     if (msec == 100) {
//         msec = 0;
//         sec++;
//         if (sec == 60) {
//             sec = 0;
//             min++;
//         }
//     }
//     let msecString = msec < 10 ? `0${msec}` : msec;
//     let secString = sec < 10 ? `0${sec}` : sec;
//     let minString = min < 10 ? `0${min}` : min;

//     timer.innerHTML = `${minString}:${secString}:${msecString}`;
// }
