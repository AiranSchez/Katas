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
    const resultText = transformTextWithAnchors(inputText)
    return resultText
}

const transformTextWithAnchors = (inputText, counter=1) => {
    if (inputText.match(/\]\((.*)/s) === null){
        return inputText
    }
    const splittedTextByLink = inputText.split(/\]\((.*)/s)
    const linkText = getLinkText(splittedTextByLink[0])
    const linkUrl = getLinkUrl(splittedTextByLink[1])

    const replaceInText = replaceLinksInText(inputText, linkText, linkUrl, counter)
    return transformTextWithAnchors(replaceInText, counter++)
}

export { commandLineProcessor, addFootNotes };

const getLinkText = (text) => {
    return text.substring(text.indexOf("[")+1)
}

const getLinkUrl = (text) => {
    return text.substring(0, text.length -1)
}

const replaceLinksInText = (text, linkText, linkUrl, counter) => {
    const footnote = '[^' + counter + ']:' + linkUrl
    const textWithFootnote = text.replace(/\[(.*?)\)/s, linkText + "[^" + counter + "]")
    return textWithFootnote + "\n\n" + footnote
}
