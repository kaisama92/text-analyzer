# _text-analyzer_

#### By ***Kai Clausen and Hyung Jin Kim***

#### _This application creates testing functionality for TDD_

## Technologies Used

* _JS_
* _HTML_
* _CSS_

## Description

# Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code: 
const text = "hello";
wordCounter(text);
Expexted Output: 1

Test: "It should return 2 if a passage has two words."
Code: 
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("           ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

# Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code: 
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code: 
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code: 
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0

# Description - replaceOffensiveWords()

Test: "It should identify an offensive word in an element."
Code: 
const text = "Zoinks! That biffaroni of a muppeteer told him to do a loopdaloop!";
const words = "zoinks", "biffaroni", "muppeteer", "loopdaloop";
Expected Output: True

Test: "It should insert "@$%" when the offensive words appear."
Code: 
const text = "Zoinks! That biffaroni of a muppeteer told him to do a loopdaloop!";
const words = "zoinks", "biffaroni", "muppeteer", "loopdaloop";
Expected Output: "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%", "@$%"

Test: "It should only replace the words that are offensive."
Code: 
const text = "Zoinks! That biffaroni of a muppeteer told him to do a loopdaloop!";
const words = "zoinks", "biffaroni", "muppeteer", "loopdaloop";
Expected Output: "@$%", "That", "@$%", "of", "a", "@$%", "told", "him", "to", "do", "a", "@$%"

Test: "It should return a sentence cleaned of offensive words."
Code: 
const text = "Zoinks! That biffaroni of a muppeteer told him to do a loopdaloop!";
const words = "zoinks", "biffaroni", "muppeteer", "loopdaloop";
Expected Output: "@$% That @$% of a @$% told him to do a @$%"

# Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

# Describe: totalWordCounter()
Test: "It should return 0 if the string is empty."
Code: 
const text = "";
Expected Output: null

Test: "It should return the word and 1 for a one word string."
Code: 
const text = "hello";
Expected Output: "hello: 1"

Test: "It should return each word in the text."
Code: 
const text = "hello there"
Expected Output "hello", "there"

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top directory_
* _Add the js file to your project/console_
* _Run the functions._

## Known Bugs

* _No HTML files_
* _No CSS files_

## License

_MIT - Should you encounter any problems, feel free to fix them yourself, or contact Kai at kaiclausen123@gmail.com_

Copyright (c) _2023_ _Kai Clausen and Hyung Jin Kim_