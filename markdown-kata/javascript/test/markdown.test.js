import { commandLineProcessor, addFootNotes} from "../src/markdown";
import fs from "fs"
import path from "node:path";
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
1- random input output -> Falla porque no es un comando válido
2- process -> Falla porque necesita input
3- process input.md -> Te funciona y te crea un fichero vacío
4- process input.md output.md
process file1.md output_file.md
*/

describe("Markdown kata", () => {
    afterEach(async() => {
        const directory = "./files"
        for (const file of await fs.readdirSync(directory)) {
            await fs.unlink(path.join(directory, file), () => {});
        }
    });
    it("will not work if trigger is not defined", () => {
        expect(commandLineProcessor("random input output")).toEqual("Invalid command, please use `process` to start using the markdown converter");
    });

    it("will not work if command is not completed", () => {
        expect(commandLineProcessor("process")).toEqual("You should specify the file you want to analyze");
    });

    it("will create a default output file", () => {
        commandLineProcessor("process input.md")
        
        const outputFile = fs.readFileSync("./files/output.md", (error, data) => { return data })

        expect(outputFile).toBeDefined()
    });

    it("will create a output file specified by args", () => {
        commandLineProcessor("process input.md output.md")
        
        const outputFile = fs.readFileSync("./files/output.md", (error, data) => { return data })

        expect(outputFile).toBeDefined()
    });

    it("will process an markdown file and generates an output", async () => {
        const markdownText = "[Hola](www.youtube.es) en el [siguiente enlace](www.google.es) pueden encontrar mas info"
        await fs.writeFileSync('./files/input.md', markdownText);

        commandLineProcessor("process input.md outputfinal.md")
        
        const outputFileContent = fs.readFileSync("./files/outputfinal.md", (error, data) => { return data })    
        expect(outputFileContent).toBe("Hola[^1] en el siguiente enlace[^2] pueden encontrar mas info\n\n[^1]: www.youtube.es\n[^2]: www.google.es")
    });

    it("will not transform if there is no content", () => {
        expect(addFootNotes("")).toBe("")
    })
})