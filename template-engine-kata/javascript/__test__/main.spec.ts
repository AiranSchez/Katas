/*
Use cases for this test:
    Input1  Input2     Output
DONE 1- (  "",     {}  ) =>  "" 
DONE 2- (  "hola",     {}  ) =>  "hola" 
Covered 3- (  "Hola ${key1}", {key0: "Mario"}  ) =>  "Hola ${key1}" 
DONE 4- (  "Hola ${key1}", {key1: "Mario"}  ) =>  "Hola Mario" 
DONE 5- (  "Hola ${key1} y ${key2}", {key1: "Mario", key2: "Airan"}  ) =>  "Hola Mario y Airan" 
6- (  "Hola que tal \n" +
      "${key1} y ${key2} \n." +
      "Tengan un buen dia." ,     {key1: "Mario", key2: "Airan"}  ) =>  "Hola que tal" + \n
                                                                        "Mario y Airan" + \n
                                                                        "Tengan un buen dia."

*/
describe('Template engine should', () => {
  it('process empty text and empty dictionary without parametrizing', () => {
    expect(templateEngine("", {})).toBe("");
  });
  it('process text unparametrized with a empty dictionary', () => {
    expect(templateEngine("Hola", {})).toBe("Hola");
  }); 
  
  it('process text parametrized with one key', () => {
    expect(templateEngine("Hola ${key1}", {key1: "Mario"})).toBe("Hola Mario");
  });

  it('process text parametrized with multiple keys', () => {
    expect(templateEngine("Hola ${key1} y ${key2}", {key1: "Mario", key2: "Airan"})).toBe("Hola Mario y Airan");
  });
  
  // it('process text broken multilines with a symbol without dropping the symbol', () => {
  //   expect(
  //     templateEngine("Hola que tal \n" +
  //     "${key1} y ${key2} \n." +
  //     "Tengan un buen dia." ,     {key1: "Mario", key2: "Airan"})
  //   ).toBe(
  //     "Hola que tal" + 
  //     "Mario y Airan" + 
  //     "Tengan un buen dia."
  //   );
  // });  

  // create a test to check in typescript that templateEngine is called with null values in the dictionary and raise error
  it("should throw an error when the dictionary is null", () => {
    expect(() => templateEngine("Hola ${key1}", undefined)).toThrow(new Error("Dictionary is null"));
  });
  it("should throw an error when the text is null", () => {
    expect(() => templateEngine(undefined, {key1: "Mario"})).toThrow(new Error("Text is null"));
  });
});

// const checkInputs = (dictionary?: Record<string, string|undefined> , templateText?: string) => {
//   if (dictionary === undefined) {
//     throw new Error("Dictionary is null");
//   }
//   if (templateText === undefined) {
//     throw new Error("Text is null");
//   }
// }

const templateEngine = (templateText?: string, dictionary?: Record<string, string | undefined>) => {
  if (dictionary === undefined) {
    throw new Error("Dictionary is null");
  }
  if (templateText === undefined) {
    throw new Error("Text is null");
  }
  const emptyDictionary = Object.keys(dictionary).length === 0;
  if(emptyDictionary){
    return templateText
  }
  return replaceAllParametersOnTemplate(dictionary, templateText);

}

const replaceAllParametersOnTemplate = (dictionary: Record<string, string | undefined>, templateText: string) => {
  for (let [key, value] of Object.entries(dictionary)) {
    templateText = templateText.replace(`\${${key}}`, value? value : "");
  }
  return templateText;
}
