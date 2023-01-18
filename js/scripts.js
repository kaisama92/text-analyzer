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

// function omitEveryOccurenceOfWordInText(word, text) {
//   const offensiveWords = text.split(" ");
//   let wordPlace = 0;
//   offensiveWords.forEach(function(element) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordPlace += (" " + offensiveWords.indexOf(element));
    
//       // wordCount++;
//     }
//   })
//     return wordPlace;
// }

const filterList = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
function omitEveryOccurenceOfWordInText(filterList, text) {
  const textArray = text.split(" ");
  const offensiveWords = textArray.filter(filterList)
  function checkOffensive(element) {
      console.log(element);
      if (element !== "zoinks" && element !== "muppeteer" && element !== "biffaroni" && element !== "loopdaloop") {
          return element;
      }
  };
}

//UI Logic