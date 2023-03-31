import fs from "fs"

const errors = {
    notFoundCommand: "Invalid command, please use `process` to start using the markdown converter",
    commandNotValid: "You should specify the file you want to analyze",
}

const write = (filePath = "output.md") => {
    fs.openSync("./files/"+filePath, 'w')
}

const commandLineProcessor = (command) => {
    const commandSplitted = command.split(" ")
    const invalidCommand = commandSplitted[0] != "process"
    if (invalidCommand){
        return errors.notFoundCommand
    }
    const commandIsNotValid = commandSplitted.length === 1
    if (commandIsNotValid) {
        return errors.commandNotValid
    }
    const inputFileName = commandSplitted[1]
    const outputFileName = commandSplitted[2]
    const transformed = addFootNotes(inputFileName)
    write(outputFileName)
}

const addFootNotes = (inputText) => {
    const emptyText = inputText.length === 0
    const noLinksDetected = !inputText.includes("](")
    if (emptyText | noLinksDetected){
        return inputText
    }
    const resultText = transformTextWithAnchors(inputText, "")
    return resultText
}

const transformTextWithAnchors = (inputText, transformedText) => {
    if (inputText.length === 0){
        return transformedText
    }
    const firstLinkSplittedAppeareance = inputText.split(/\]\((.*)/s)
    const linkText = firstLinkSplittedAppeareance[0].substring(1)
    const linkUrl = inputText.split(/\]\((.*)/s)[1].substring(0, inputText.split(/\]\((.*)/s)[1].length -1)
    const restOfContent = inputText.split(/\]\((.*)/s)[1].split(/\)(.*)/s)[1]
    const result = linkText + '[^1]\n\n' + "[^1]:" + linkUrl
    return transformTextWithAnchors(restOfContent, result)  
}

export { commandLineProcessor, addFootNotes };