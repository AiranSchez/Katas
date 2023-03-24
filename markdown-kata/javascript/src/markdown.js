const errors = {
    notFoundCommand: "Command not found",
    commandNotValid: "You should specify the file you want to analyze",
}

const commandLineProcessor = (command) => {
    const commandSplitted = command.split(" ")
    const notFoundCommand = commandSplitted[0] != "process"
    console.log(commandSplitted);
    if (notFoundCommand){
        return errors.notFoundCommand
    }
    const commandIsNotValid = commandSplitted.length === 1
    if (commandIsNotValid) {
        return errors.commandNotValid
    }

}
export { commandLineProcessor };