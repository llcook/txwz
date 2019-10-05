let textOutputBox = $("#textOutputBox");
let textInputBox = $("#textInputBox");

$("#lowercaseButton").on("click", () => {
    event.preventDefault();
    let textInput = textInputBox.val();
    let textOutput = textInput.toLowerCase();
    textOutputBox.val(textOutput);
});

$("#uppercaseButton").on("click", () => {
    event.preventDefault();
    let textInput = textInputBox.val();
    let textOutput = textInput.toUpperCase();
    textOutputBox.val(textOutput);
});

$("#clearButton").on("click", () => {
    event.preventDefault();
    textInputBox.val("");
    textOutputBox.val("")
});

$("#removeBrackets").on("click", () => {
    event.preventDefault();
    let textInput = textInputBox.val();
    let removeBracketPhrases = /(\[(?:\[??[^\[]*?\]))|(\{(?:\{??[^\{]*?\}))/g;
    let textOutput = textInput.replace(removeBracketPhrases, "").toLowerCase();
    textOutputBox.val(textOutput);
});

// NEXT STEPS:
// #removeBrackets works, but it also removes the SOT ID
        // FIX:
            // SOT IDs are wrapped in asterisks: **TKTK/TKTK**
            // add RegEx to removeBracketPhrases that:
                // matches brackets/curlys AND
                // excludes nested **TKTK/TKTK** phrases

// format text for web:
        // eliminate extra spaces
        // capitalize first letter after a period
        // remove repeat periods
        // add quotation marks to text that comes after **TKTK/TKTK**]
            // EXTRA: move **TKTK/TKTK** phrase to the end of the string the follows it, which should be the SOT quote, and add a period
                // replace the period at the end of the SOT string with a comma