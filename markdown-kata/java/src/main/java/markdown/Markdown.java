package markdown;

import java.util.Arrays;
import java.util.List;

public class Markdown {

    public String transform(String inputText) {
        boolean emptyText = inputText.length() != 0;
        boolean noLinksDetected = inputText.contains("]") | inputText.contains("[");
        if (emptyText && noLinksDetected){
            List<String> link = getLink(inputText);
            return link.get(0) + " [^anchor1]\n\n[^anchor1]: " + link.get(1);
        }
        return inputText;
    }

    public List<String> getLink(String inputText){
        String[] inputTextSplitted = inputText.split("[](]");
        String text = getLinkText(inputTextSplitted);
        String url = getLinkUrl(inputTextSplitted);
        List<String> link = Arrays.asList(text, url);
        return link;
    }

    private static String getLinkUrl(String[] inputTextSplitted) {
        return inputTextSplitted[2].substring(0, inputTextSplitted[2].length() - 1);
    }

    private static String getLinkText(String[] inputTextSplitted) {
        return inputTextSplitted[0].substring(1);
    }
}
