
const trustWords = ["innovation", "progress", "connection", "creativity", "solutions", "technology"];
let currentIndex = 0;

const changingWord = document.getElementById("changing-word");

// Dynamically set the min-width to the longest word length
const longestWord = trustWords.reduce((a, b) => (a.length > b.length ? a : b));
changingWord.style.minWidth = `${longestWord.length}ch`;

setInterval(() => {
  // Rotate out the current word
  changingWord.classList.remove("rotate-in");
  changingWord.classList.add("rotate-out");

  setTimeout(() => {
    // Change the text after the rotation-out animation
    currentIndex = (currentIndex + 1) % trustWords.length;
    changingWord.textContent = trustWords[currentIndex];

    // Rotate in the new word
    changingWord.classList.remove("rotate-out");
    changingWord.classList.add("rotate-in");
  }, 500); // Matches the duration of the CSS transition
}, 3000); // Change every 3 seconds