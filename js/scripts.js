// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
} 

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if(element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

    // let newWordCount = 0;
    // wordCount = newWordCount + numberOfOccurrencesInText(element1, words);
    // container += word + " " + wordCount;

function totalWordCounter(words) {
  let array = [];
  let array1 = [];
  const totalWordArray = words.split(" ");
  let container = [];
  // container += totalWordArray [0];
  let wordCount = 0;
  if (isEmpty(words)) {
    return null;
  } else {
    totalWordArray.forEach(function(element1) {
      if (container.includes(element1.toLowerCase())) {
      } else {
        container.push(element1.toLowerCase());
        wordCount = 0
        totalWordArray.forEach(function(element2) {
          if (element1.toLowerCase() === element2.toLowerCase()) {
            wordCount++
          }
        });
        container.push(": " + wordCount + ", ");
      }
    })

    
  // const word = text.toString() + ": " + wordCounter(text);
  // totalWordArray.forEach(function(element1) {
  //   if (container.toLowerCase().includes(element1.toLowerCase())) {
  //   totalWordArray.forEach(function (element2) {
  //     if(element1 === element2) {
  //       wordCount += 1;
  //       }
  //     });
  //   }
  //   });
  }
  // return word; 
  return container;
}

// function countEachWord(text) {
//   let array = [];
//   let array1 = [];
//   let array2 = [];
//   let array3 = [];

//   array[0] = document.getElementById("input").value;
//   array1 = array.toString();
//   array1 = array1.split(" ");
//   if (text.trim().length === 0) {
//     return null;
//   }
//   else {
//     array1.forEach(function (element) {
//       element = element.toLowerCase();
//       array3.push(element);
//     });
//     array3.forEach(function (element1) {
//       let count = 0;
//       array3.forEach(function (element2) {
//         if (element1 === element2) {
//           count += 1;
//         }
//       });
//       array2.push(count + " - " + element1);
//     });
//     let uniqueArray = [...new Set(array2)];
//     uniqueArray.sort();
//     uniqueArray.reverse();
//     uniqueArray.forEach(function (word) {
//       const paragraph = document.createElement("p");
//       paragraph.append(word);
//       document.body.append(paragraph);
//     });
//   }
// }

function replaceOffensiveWords(text) {
  const newArray = text.split(" ");
  let array1 = [];
  const zoinks = "zoinks";
  const muppeteer = "muppeteer";
  const biffaroni = "biffaroni";
  const loopdaloop = "loopdaloop";
  newArray.forEach(function(element) {
    if(element.toLowerCase().includes(zoinks.toLowerCase()) || element.toLowerCase().includes(muppeteer.toLowerCase()) || element.toLowerCase().includes(biffaroni.toLowerCase()) || element.toLowerCase().includes(loopdaloop.toLowerCase())) {
      element = "@$%";
      array1.push(element);
    } else {
      array1.push(element);
    }
  });
  array1.join(" ");
  console.log(newArray);
  console.log(array1);
}

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});