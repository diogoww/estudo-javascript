// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
    let audioKeyCode = getKeyCode(event)  
    //typed or pressed key
    //if key exists
    //play audio
}

function getKeyCode (event) {
    let keyCode
    const isKeyboard = event.type === "keydown" 
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
}
// click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
})
// keyboard type
window.addEventListener("keydown", playNote)