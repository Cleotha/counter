let saveEL=document.getElementById("save-el")
let countEL=document.getElementById("count-el")

let count = 0

function myFunction() {
    count += 1
countEL.innerHTML = count
}
function save() {
    let saved = count + " - "
    saveEL.textContent += saved 
    countEL.innerHTML = 0
    count = 0
}