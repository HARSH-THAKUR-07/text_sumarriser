function summarizeText() {
    const text = document.getElementById('inputText').value;
    const maxSentences = 3; // You can change the number of sentences to display in the summary

    // Split the text into sentences
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    if (!sentences) {
        document.getElementById('summary').innerText = "Please enter valid text.";
        return;
    }

    // Simple algorithm: Take the first few sentences
    const summary = sentences.slice(0, maxSentences).join(' ');
    document.getElementById('summary').innerText = summary;
}
