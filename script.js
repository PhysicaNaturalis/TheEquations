const scriptUrl = 'https://script.google.com/macros/s/AKfycbwF1Q55OsCscz_eHRryLzqrPhfcwn8kvzd4AFdnwsE/dev'
    // Password visibility toggle
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('loginPassword');
toggleButton.addEventListener('click', function() {
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
    toggleButton.classList.toggle('ri-eye-fill');
    toggleButton.classList.toggle('ri-eye-off-fill');
});

// Create password visibility toggle
const passwordInputCreate = document.getElementById('passwordCreate');
const toggleButtonCreate = document.getElementById('loginPasswordCreate');
toggleButtonCreate.addEventListener('click', function() {
    if (passwordInputCreate.type === 'password'){
        passwordInputCreate.type = 'text';
    }
    else {
        passwordInputCreate.type = 'password';
    }
    toggleButtonCreate.classList.toggle('ri-eye-fill');
    toggleButtonCreate.classList.toggle('ri-eye-off-fill');
});

// Password feedback
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('password-feedback');
    const minLength = 8;
    if (password.length < minLength) {
        feedback.textContent = 'Password must be at least 8 characters.';
    } else {
        feedback.textContent = 'Password is strong enough.';
    }
});

document.getElementById('passwordCreate').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('password-create-feedback');
    const minLength = 8;
    if (password.length < minLength) {
        feedback.textContent = 'Password must be at least 8 characters.';
    } else {
        feedback.textContent = 'Password is strong enough.';
    }
});

// Form submissions
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const names = document.getElementById('names').value;
    const surnames = document.getElementById('surnames').value;
    const emailCreate = document.getElementById('emailCreate').value;
    const passwordCreate = document.getElementById('passwordCreate').value;

    fetch('https://script.google.com/macros/s/AKfycbwF1Q55OsCscz_eHRryLzqrPhfcwn8kvzd4AFdnwsE/dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'register',
            names: names,
            surnames: surnames,
            email: emailCreate,
            password: passwordCreate
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Account created successfully!');
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

// Login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://script.google.com/macros/s/AKfycbwF1Q55OsCscz_eHRryLzqrPhfcwn8kvzd4AFdnwsE/dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'login',
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
