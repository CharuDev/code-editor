
const dark = document.querySelector(".btn.btn-dark");
const light = document.querySelector(".btn.btn-light");
const editor = document.querySelector(".editor");
const run = document.querySelector(".btn.btn-run");
const iframe = document.querySelector(".iframe");
const live = document.querySelector("#live");
dark.addEventListener("click",() =>{
    editor.style.backgroundColor = "black";
    editor.style.color = "#fff";
    iframe.style.backgroundColor = "black";
     iframe.style.color = "#fff"
})
light.addEventListener("click",() =>{
    editor.style.backgroundColor = "#2C3333";
    editor.style.color = "#fff";
    iframe.style.backgroundColor = "#2C3333";
    iframe.style.color = "#fff"
})
run.addEventListener("click",() =>{
    const html = editor.textContent; // Use innerHTML to include tags
    iframe.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
})


