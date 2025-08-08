/***********************
 * Part 1: Basics - Variables, Conditionals
 ***********************/

// Get age input and display appropriate message
const ageInput = document.getElementById('age');
const checkAgeBtn = document.getElementById('checkAge');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    
    // Basic conditional example
    if (isNaN(age)) {
        ageResult.textContent = "Please enter a valid age.";
    } else if (age < 0) {
        ageResult.textContent = "Age cannot be negative!";
    } else if (age < 18) {
        ageResult.textContent = "You are a minor.";
    } else if (age >= 18 && age < 65) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a senior citizen.";
    }
});

/***********************
 * Part 2: Functions
 ***********************/

// Function to calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to format text (alternate case)
function formatAlternatingCase(text) {
    let formatted = '';
    for (let i = 0; i < text.length; i++) {
        formatted += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    return formatted;
}

// Using the functions with DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const sumResult = document.getElementById('sumResult');

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        sumResult.textContent = "Please enter valid numbers.";
    } else {
        const result = calculateSum(num1, num2);
        sumResult.textContent = `The sum is: ${result}`;
    }
});

const textInput = document.getElementById('textToFormat');
const formatTextBtn = document.getElementById('formatText');
const formattedText = document.getElementById('formattedText');

formatTextBtn.addEventListener('click', () => {
    const text = textInput.value;
    formattedText.textContent = formatAlternatingCase(text);
});

/***********************
 * Part 3: Loops
 ***********************/

// Countdown using while loop
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

countdownBtn.addEventListener('click', () => {
    let count = 10;
    countdownDisplay.textContent = '';
    
    // While loop example
    while (count >= 0) {
        setTimeout(() => {
            countdownDisplay.textContent = count === 0 ? "Liftoff!" : count;
        }, (10 - count) * 1000);
        count--;
    }
});

// Generate list using for loop
const generateListBtn = document.getElementById('generateListBtn');
const numberList = document.getElementById('numberList');

generateListBtn.addEventListener('click', () => {
    numberList.innerHTML = ''; // Clear previous list
    
    // For loop example
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        numberList.appendChild(li);
    }
});

/***********************
 * Part 4: DOM Manipulation
 ***********************/

// Change color on click
const colorBox = document.getElementById('colorBox');
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];

colorBox.addEventListener('click', () => {
    // DOM manipulation - changing style
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Add items to a list dynamically
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 1;

addItemBtn.addEventListener('click', () => {
    // DOM manipulation - creating elements
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic Item ${itemCount++}`;
    dynamicList.appendChild(newItem);
});

// Toggle content visibility
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
    // DOM manipulation - toggling classes
    toggleText.classList.toggle('hidden');
});