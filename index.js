const outputbox = document.getElementById("output-box")

function streamGenerator(button) {
    const parent = button.parentElement
    const length = parseInt(parent.querySelector("#stream-gen--length").value)
    const division = parseInt(parent.querySelector("#stream-gen--division").value)
    const keys = parseInt(parent.querySelector("#stream-gen--keys").value)

    const advanced = false

    const totalNotes = length * division
    const noteWidth = Math.floor(12 / keys)

    const sideLength = Math.floor(keys / 2)
    const isOdd = keys % 2 == 1

    var result = []

    for (let i = 0; i < totalNotes / 2; i++) {
        const leftNoteLane = random(1, sideLength)
        const rightNoteLane = random(1, sideLength) + 6
        result.push({ width: noteWidth, lane: leftNoteLane })
        result.push({ width: noteWidth, lane: rightNoteLane })
    }

    outputbox.innerText = JSON.stringify(result)
    return result
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}