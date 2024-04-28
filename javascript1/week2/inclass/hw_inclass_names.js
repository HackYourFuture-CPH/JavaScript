const firstWords = [
  "Efficient",
  "Modern",
  "Strategic",
  "Reliable",
  "Advanced",
  "Proactive",
  "Agile",
  "NextGen",
  "Peak",
  "Vivid",
];
const secondWords = [
  "Enterprises",
  "Products",
  "Ideas",
  "Operations",
  "Initiatives",
  "Engines",
  "Platforms",
  "Structures",
  "Connections",
  "Models",
];

const firstRandomNumber = Math.floor(Math.random() * 10);
const secondRandomNumber = Math.floor(Math.random() * 10);

const randomFirstWord = firstWords[firstRandomNumber];
const randomSecondWord = secondWords[secondRandomNumber];

const charactersLength = randomFirstWord.length + randomSecondWord.length;
const startupName = `${randomFirstWord} ${randomSecondWord}`;
const startupMessage = `The startup: "${startupName}" contains ${charactersLength} characters.`;

console.log(startupMessage);
