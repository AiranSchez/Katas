import {templateEngine} from "../src/TemplateEngine";

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
  
  it("should throw an error when the dictionary is null", () => {
    expect(() => templateEngine("Hola ${key1}", undefined)).toThrow(new Error("Dictionary is null"));
  });
  it("should throw an error when the text is null", () => {
    expect(() => templateEngine(undefined, {key1: "Mario"})).toThrow(new Error("Text is null"));
  });

  it('process text parametrized with same key but multiple occurrences', () => {
    expect(templateEngine("Hola ${key1}, ${key1}", {key1: "Maik"})).toBe("Hola Maik, Maik");
  });
});


