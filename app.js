// let number = document.getElementById("numberInput");
// let sendBtn = document.getElementById("sendBtn");
// let decr = document.getElementById("decr");
// let son = document.getElementById("son");
// let incr = document.getElementById("incr");
// let colorSelect = document.getElementById("colorSelect");

// let raqam = +son_input.value;



// sendBtn.addEventListener("click", () => {
//     raqam = innerText = son_input.value;
//     son_input.value = "";
// });

// decr.addEventListener("click", () => {
//     son.innerText = +son.inertText++;
//     // son.innerText = +son.innerText - 1;
// })

// incr.addEventListener("click", () => {
//     son.innerText = +son.inertText--;
//     // son.innerText = +son.innerText - 1;
// })

// colorSelect.addEventListener("change", () => {
//     son.style.color = colorSelect.value;
// })

let number = document.getElementById("son_input");
let sendBtn = document.getElementById("sendBtn");
let decr = document.getElementById("decr");
let son = document.getElementById("son");
let incr = document.getElementById("incr");
let colorSelect = document.getElementById("colorSelect");

let raqam = 0;

sendBtn.addEventListener("click", () => {
    son.innerText = son_input.value;
    son_input.value = "";
});

decr.addEventListener("click", () => {
    son.innerText--;
   
});

incr.addEventListener("click", () => {
    son.innerText++;
 
});

colorSelect.addEventListener("change", () => {
    son.style.color = colorSelect.value;
});
