import { commandLineProcessor } from "../src/markdown";
import fs from "fs"
// import regeneratorRuntime from "regenerator-runtime";

/*
Dado un fichero markdown, cambiar todos los enlaces por anclas al final del documento.

ejemplo:

Texto del fichero markdown:

Hola que tal, [visita el link](www.youtube.es) para enterarte de [todas las novedades](www.google.es)

Sacar en un fichero nuevo lo siguiente:

Hola que tal, visita el link[^1] para enterarte de todas las novedades[^2]

[^1]: www.youtube.es
[^2]: www.google.es

| Input | output |
1- ""  ->  ""
2- "Hola"  ->  "Hola"
4- "[Hola](www.youtube.es)"  ->  "Hola[^1]\n\n[^1]: www.youtube.es"
3- "![imagen chula](www.imgur.es/foto.png)"  ->  "![imagen chula](www.imgur.es/foto.png)"
5- "[Hola\n que tal](www.youtube.es)"  ->  "Hola\n que tal\n\n[^1]: www.youtube.es"
6- "[Hola\n\n que tal](www.youtube.es)"  ->  "Error"


Linea de comandos:
process file1.md output_file.md
*/

describe("Markdown kata", () => {
    it("markdown command will not work if trigger is not defined", () => {
        expect(commandLineProcessor("random input output")).toEqual("Command not found");
    });

    it("markdown will not work if command is not completed", () => {
        expect(commandLineProcessor("process")).toEqual("You should specify the file you want to analyze");
    });

    it("markdown will create a default output file", () => {
        commandLineProcessor("process input.md")
        
        const outputFile = fs.readFileSync("./output.md", (error, data) => { return data })

        expect(outputFile).toBeDefined()
    });
})