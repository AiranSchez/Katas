package markdown;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
// Se le pasa un texto y debemos sacar los enlaces

// 1- Texto vacío -> Devuelve el mismo texto vacío
// 2- Texto sin enlaces -> Devuelve el mismo texto sin enlaces
// 3- 1 enlace [Texto del enlace](url) ->
    // "Texto del enlace [^urlanchor]"
    // [^urlanchor]: url
// 4-

public class MarkdownTest {

    @Test
    void shouldNotTransformIfThereIsNoContent() {
        String inputText = "";
        String outputText = "";
        Markdown markdown = new Markdown();

        outputText = markdown.transform(inputText);

        assertEquals(inputText, outputText);
    }

    @Test
    void shouldNotTransformIfThereIsNoLinks() {
        String inputText = "This is an example";
        String outputText = "";
        Markdown markdown = new Markdown();

        outputText = markdown.transform(inputText);

        assertEquals(inputText, outputText);
    }

    @Test
    void shouldExtractLinkFromInputText() {
        String inputText = "[Texto del enlace](url)";
        String expectedText = "Texto del enlace [^anchor1]\n\n[^anchor1]: url";
        Markdown markdown = new Markdown();

        String outputText = markdown.transform(inputText);

        assertEquals(expectedText, outputText);
    }
}
