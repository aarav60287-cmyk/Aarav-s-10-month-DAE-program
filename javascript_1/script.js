// Variables
const siteName = "Brainrot Weekly";
const spotsLeft = 153;
let isOpen = true;

// Math operation
const totalSpots = spotsLeft + 847;

// if/else + AND operator + DOM and console output
document.getElementById("signup-btn").addEventListener("click", function () {
  if (isOpen && spotsLeft > 0) {
    document.getElementById("signup-message").textContent = "You're signed up for " + siteName + "!";
    console.log("Signed up! Total spots: " + totalSpots);
  } else {
    document.getElementById("signup-message").textContent = "Sign ups are closed!";
    console.log("Sign ups closed.");
  }
});