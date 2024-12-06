document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'nigora' && password === 'break') {
        errorMessage.textContent = '';
        alert('Login successful!');
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});