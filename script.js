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
