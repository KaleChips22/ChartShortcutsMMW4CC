const outputbox = document.getElementById("output-box")

function streamGenerator(button) {
    const parent = button.parentElement
    const length = parseInt(parent.querySelector("#stream-gen--length").value)
    const division = parseInt(parent.querySelector("#stream-gen--division").value)
    const keys = parseInt(parent.querySelector("#stream-gen--keys").value)

    const advanced = false

    const totalNotes = length * division
    const noteWidth = Math.floor(12 / keys)

    const keysPerSide = keys / 2
    const isOdd = keys % 2 == 1

    if (isOdd) keysPerSide -= 0.5

    var result = []

    for (let i = 0; i < totalNotes / 2; i++) {
        const leftNoteLane = randomInt(0, keysPerSide) * noteWidth
        const rightNoteLane = randomInt(0, keysPerSide) * noteWidth + 6
        result.push({ width: noteWidth, lane: leftNoteLane })
        result.push({ width: noteWidth, lane: rightNoteLane })
    }

    outputbox.innerText = JSON.stringify(result)
    return result
}

function randomInt(min, max) {
    let maxF = Math.floor(max)
    let minC = Math.ceil(min)
    return Math.random() * (maxF - minC) + min
}