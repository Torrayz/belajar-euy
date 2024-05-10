    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    document.addEventListener("DOMContentLoaded", function() {
        const signupForm = document.getElementById('signup-form');
        const signinForm = document.getElementById('signin-form');
        const messageContainer = document.getElementById('message-container');

        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;


            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            signupForm.reset();

            showMessage('Akun berhasil dibuat! Silakan masuk.');
        });

        signinForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
        
            const signinEmail = document.getElementById('signin-email').value;
            const signinPassword = document.getElementById('signin-password').value;

        
            const savedEmail = localStorage.getItem('email');
            const savedPassword = localStorage.getItem('password');

    
            if (signinEmail === savedEmail && signinPassword === savedPassword) {
            
                showMessage('Login berhasil!');
            
                window.location.href = 'home.html';
            } else {
                
                showMessage('Email atau password salah. Silakan coba lagi.');
            }
        });

    
        function showMessage(message) {
            messageContainer.textContent = message;
            messageContainer.classList.add('show');
            setTimeout(() => {
                messageContainer.classList.remove('show');
            }, 3000);
        }
    });
