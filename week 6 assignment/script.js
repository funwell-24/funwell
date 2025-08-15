// =============================================
// Part 1: JavaScript Event Handling and Elements
// =============================================

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        themeToggle.textContent = 'Toggle Dark Mode';
    }
});

// Counter game functionality
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
    if (count > 0) {
        countDisplay.style.color = 'green';
    }
});

decrementBtn.addEventListener('click', function() {
    count--;
    countDisplay.textContent = count;
    if (count < 0) {
        countDisplay.style.color = 'red';
    }
});

resetBtn.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
    countDisplay.style.color = 'black';
});

// FAQ section functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        // Toggle answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});

// =============================================
// Part 2: Form Validation with JavaScript
// =============================================
const registrationForm = document.getElementById('registration-form');

// Helper function to validate name
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name);
}

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate password
function validatePassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

// Validate form on submission
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validate name
    const nameError = document.getElementById('name-error');
    if (!name) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (!validateName(name)) {
        nameError.textContent = 'Name must be 2-50 letters and spaces only';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Validate email
    const emailError = document.getElementById('email-error');
    if (!email) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Validate password
    const passwordError = document.getElementById('password-error');
    if (!password) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    
    // Validate confirm password
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Please confirm your password';
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('success-message').textContent = 'Registration successful!';
        // In a real app, you would submit the form data to a server here
    } else {
        document.getElementById('success-message').textContent = '';
    }
});

// Add real-time validation as users type
document.getElementById('name').addEventListener('input', function() {
    const name = this.value.trim();
    const nameError = document.getElementById('name-error');
    
    if (!name) {
        nameError.textContent = '';
        this.classList.remove('error-input');
    } else if (!validateName(name)) {
        nameError.textContent = 'Name must be 2-50 letters and spaces only';
        this.classList.add('error-input');
    } else {
        nameError.textContent = '';
        this.classList.remove('error-input');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('email-error');
    
    if (!email) {
        emailError.textContent = '';
        this.classList.remove('error-input');
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        this.classList.add('error-input');
    } else {
        emailError.textContent = '';
        this.classList.remove('error-input');
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordError = document.getElementById('password-error');
    
    if (!password) {
        passwordError.textContent = '';
        this.classList.remove('error-input');
    } else if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
        this.classList.add('error-input');
    } else {
        passwordError.textContent = '';
        this.classList.remove('error-input');
    }
    
    // Also validate confirm password if it has value
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword) {
        const confirmPasswordError = document.getElementById('confirm-password-error');
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            document.getElementById('confirm-password').classList.add('error-input');
        } else {
            confirmPasswordError.textContent = '';
            document.getElementById('confirm-password').classList.remove('error-input');
        }
    }
});

document.getElementById('confirm-password').addEventListener('input', function() {
    const confirmPassword = this.value;
    const password = document.getElementById('password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    if (!confirmPassword) {
        confirmPasswordError.textContent = '';
        this.classList.remove('error-input');
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        this.classList.add('error-input');
    } else {
        confirmPasswordError.textContent = '';
        this.classList.remove('error-input');
    }
});