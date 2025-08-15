// =============================================
// Part 2: JavaScript Functions - Scope, Parameters & Return Values
// =============================================

// Example 1: Calculate Rectangle Area
function calculateArea(width, height) {
    // Local scope variables
    const area = width * height;
    return area;
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    // Global scope usage
    const width = 10;
    const height = 5;
    const area = calculateArea(width, height);
    document.getElementById('area-result').textContent = area;
});

// Example 2: Personalized Greeting
function createGreeting(name = 'Guest') {
    // Parameter with default value
    return `Hello, ${name}! Welcome to our website.`;
}

document.getElementById('greet-btn').addEventListener('click', function() {
    const greeting = createGreeting('Alice');
    document.getElementById('greeting-result').textContent = greeting;
});

// Example 3: Double Number Function
function doubleNumber(num) {
    if (typeof num !== 'number') {
        // Return early if input is invalid
        return 'Please enter a valid number';
    }
    return num * 2;
}

document.getElementById('double-btn').addEventListener('click', function() {
    const input = document.getElementById('number-input').value;
    const num = parseFloat(input);
    const result = doubleNumber(num);
    document.getElementById('double-result').textContent = result;
});

// =============================================
// Part 3: Combining CSS Animations with JavaScript
// =============================================

// Example 1: Trigger CSS Animation
document.getElementById('trigger-animation').addEventListener('click', function() {
    const box = document.querySelector('.js-animated-box');
    box.classList.toggle('animate');
    
    // Reset animation after it completes
    if (box.classList.contains('animate')) {
        setTimeout(() => {
            box.classList.remove('animate');
        }, 2000);
    }
});

// Example 2: Card Flip Animation
document.getElementById('flip-btn').addEventListener('click', function() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
});

// Example 3: Modal with Animation
function toggleModal(show) {
    const modal = document.querySelector('.modal-overlay');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
}

document.getElementById('open-modal').addEventListener('click', function() {
    toggleModal(true);
});

document.getElementById('close-modal').addEventListener('click', function() {
    toggleModal(false);
});

// Close modal when clicking outside content
document.querySelector('.modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleModal(false);
    }
});