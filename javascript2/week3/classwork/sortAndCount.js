const sentence = "A Wars A: A Q Wars A Q Q Q A Q Q"
console.log(sentence)

const sentenceLetters = sentence.replace(":", "")
console.log(sentenceLetters)

const sentenceArray = sentenceLetters.split(" ")
console.log(sentenceArray)

const sentenceSorted = sentenceArray.sort()
console.log(sentenceSorted)

// const sentenceArray = ["Star", "Wars", "The", "Clone", "Wars"]

// const sentenceSorted = ["Star", "Wars", "The", "Clone", "Wars"]