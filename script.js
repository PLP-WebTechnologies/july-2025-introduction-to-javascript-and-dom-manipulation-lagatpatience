// ===== Part 1: Variable Declarations and Conditionals =====

let userName = "Alice";
let isMember = true;

if (isMember) {
  console.log(`Welcome back, ${userName}!`);
} else {
  console.log("Please sign up to enjoy more features.");
}

// ===== Part 2: Custom Functions =====

// Function 1: Greet user
function greetUser(name) {
  const message = `Hello, ${name}! Have a great day!`;
  displayMessage(message); // Reuse DOM function
}

// Function 2: Display numbers from 1 to n
function displayNumbers(n) {
  const list = document.getElementById("number-list");
  list.innerHTML = ""; // Clear previous content

  for (let i = 1; i <= n; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Number: ${i}`;
    list.appendChild(listItem);
  }
}

// ===== Part 3: Loop Examples =====

// Example 1: For loop
for (let i = 0; i < 3; i++) {
  console.log(`For loop count: ${i}`);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

// ===== Part 4: DOM Interactions =====

// 1. Update inner text of an element
function displayMessage(message) {
  const box = document.getElementById("message-box");
  box.textContent = message;
}

// 2. Event listener for greeting
document.getElementById("greet-btn").addEventListener("click", function () {
  greetUser(userName);
});

// 3. Event listener to trigger loop display
document.getElementById("loop-btn").addEventListener("click", function () {
  displayNumbers(5);
});