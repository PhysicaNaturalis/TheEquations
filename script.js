const scriptUrl = 'https://script.google.com/macros/s/AKfycbwF1Q55OsCscz_eHRryLzqrPhfcwn8kvzd4AFdnwsE/dev';

const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('loginPassword');
toggleButton.addEventListener('click', function() {
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
    }
    else{passwordInput.type = 'password';

    }
    toggleButton.classList.toggle('ri-eye-fill')
    toggleButton.classList.toggle('ri-eye-off-fill')
});


const passwordInputt = document.getElementById('passwordCreate');
const toggleButtott = document.getElementById('loginPasswordCreate');
toggleButtott.addEventListener('click', function() {
    if (passwordInputt.type === 'password'){
        passwordInputt.type = 'text';
    }
    else{passwordInputt.type = 'password';

    }
    toggleButtott.classList.toggle('ri-eye-fill')
    toggleButtott.classList.toggle('ri-eye-off-fill')
});

const loginAccessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
    loginAccessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
    loginAccessRegister.classList.remove('active')
});

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


document.getElementById('CreatePassword').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('password-feedback');
    const minLength = 8;
    if (password.length < minLength) {
      feedback.textContent = 'Password must be at least 8 characters.';
    } else {
      feedback.textContent = 'Password is strong enough.';
    }
  });


/*TRY it*/
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const names = document.getElementById('names').value;
    const surnames = document.getElementById('surnames').value;
    const emailCreate = document.getElementById('emailCreate').value;
    const passwordCreate = document.getElementById('passwordCreate').value;

    // Send registration data to Google Apps Script web app (API endpoint)
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
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
            // Redirect or handle successful registration
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

  // Login
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send login data to Google Apps Script web app (API endpoint)
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
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
            // Redirect or handle successful login
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});


function hashPassword(password) {
  return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password));
}

