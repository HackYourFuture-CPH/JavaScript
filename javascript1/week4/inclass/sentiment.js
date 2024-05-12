function createArrayOfOverlappingWords(sentenceArray, wordsList) {
  const words = [];
  for (let i = 0; i < sentenceArray.length; i++) {
    if (wordsList.includes(sentenceArray[i])) {
      words.push(sentenceArray[i]);
    }
  }
  return words;
}
function getSentimentScore(sentence, positiveWordsList, negativeWordsList) {
  const sentenceArray = sentence.split(" "); // ["I", "am", "mega", "super", ...]

  const positiveWords = createArrayOfOverlappingWords(
    sentenceArray,
    positiveWordsList
  );
  const negativeWords = createArrayOfOverlappingWords(
    sentenceArray,
    negativeWordsList
  );

  return {
    score: positiveWords.length - negativeWords.length,
    negativeWords,
    positiveWords,
  };
}

const positiveWordsList = ["happy", "awesome", "mega", "super"];
const negativeWordsList = ["sad", "boring", "hate", "awful"];

const sentimentScoreObject = getSentimentScore(
  "I am mega super awesome happy awful",
  positiveWordsList,
  negativeWordsList
);

console.log(sentimentScoreObject);
