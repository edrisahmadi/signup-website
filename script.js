document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (username && email && password) {
        document.getElementById('message').textContent = "Sign-up successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Please fill all fields!";
        document.getElementById('message').style.color = "red";
    }
});
