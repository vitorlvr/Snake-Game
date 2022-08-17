let canvas = document.getElementById("snake")
let context = cavas.getContext("2d")
let box = 32

function criarBG() {
    context.fillStyle = "lightscreen"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

criarBG()