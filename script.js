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
})
