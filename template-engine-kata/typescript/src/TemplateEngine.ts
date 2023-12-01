export const templateEngine = (templateText?: string, dictionary?: Record<string, any>) => {
    if (dictionary === undefined) {
        throw new Error("Dictionary is null");
    }
    if (templateText === undefined) {
        throw new Error("Text is null");
    }
    const emptyDictionary = Object.keys(dictionary).length === 0;
    if (emptyDictionary) {
        return templateText
    }
    return replaceAllParametersOnTemplate(dictionary, templateText);

}
const replaceAllParametersOnTemplate = (dictionary: Record<string, string | undefined>, templateText: string) => {
    for (let [key, value] of Object.entries(dictionary)) {
        templateText = templateText.replaceAll(`\${${key}}`, value ? value : "");
    }
    return templateText;
}