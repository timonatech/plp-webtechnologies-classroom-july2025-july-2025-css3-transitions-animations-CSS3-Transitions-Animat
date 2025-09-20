// ====================
// Part 2: Functions, Scope & Return Values
// ====================

// A reusable function with parameter & return value
function square(num) {
  return num * num;
}

// Function demonstrating local vs global scope
let globalMessage = "This is global.";

function showSquareResult(number) {
  let result = square(number); // local scope variable
  document.getElementById("functionOutput").textContent =
    `The square of ${number} is ${result}. ${globalMessage}`;
}

// ====================
// Part 3: Combining CSS + JavaScript
// ====================

// Function to trigger animation on the box
function animateBox() {
  const box = document.getElementById("jsBox");

  // Remove class first if it already exists, so animation can re-trigger
  box.classList.remove("animate");

  // Re-add the class after a tiny delay
  setTimeout(() => {
    box.classList.add("animate");
  }, 50);
}

// Attach event listener to button
document.getElementById("animateBoxBtn").addEventListener("click", animateBox);
