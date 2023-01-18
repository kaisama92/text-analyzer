// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" "); 
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    };
  });
  return wordCount;
};

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if(element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function replaceOffensiveWords(text) {
  const newArray = text.split(" ");
  let array1 = [];
  const zoinks = "zoinks";
  const muppeteer = "muppeteer";
  const biffaroni = "biffaroni";
  const loopdaloop = "loopdaloop";
  newArray.forEach(function(element) {
    if(element.toLowerCase().includes(zoinks.toLowerCase()) || element.toLowerCase().includes(muppeteer.toLowerCase()) || element.toLowerCase().includes(biffaroni.toLowerCase()) || element.toLowerCase().includes(loopdaloop.toLowerCase())) {
      element = "***";
      array1.push(element);
    } else {
      array1.push(element);
    }
  });
  array1.join(" ");
  console.log(newArray);
  console.log(array1);
}

//UI Logic