import fs from "fs"

const errors = {
    notFoundCommand: "Invalid command, please use `process` to start using the markdown converter",
    commandNotValid: "You should specify the file you want to analyze",
}

const write = (filePath) => {
    fs.openSync(filePath, 'w')
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
    write("./output.md")
}
export { commandLineProcessor };