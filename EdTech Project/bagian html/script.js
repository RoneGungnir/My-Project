document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const userData = {
        email,
        username,
        password
    };

    saveUserData(userData);
});

function saveUserData(userData) {
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
    window.location.href = 'login.html'; // Redirect to login page
}

window.onload = function() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    var loginButton = document.getElementById("loginButton");
    var dropdownMenu = document.getElementById("dropdown-menu");
    var logoutLink = document.getElementById("logout-link");

    if (loggedInUser) {

        loginButton.textContent = loggedInUser;


        loginButton.onclick = function() {
            dropdownMenu.classList.toggle("show");
        };

       
        logoutLink.onclick = function() {
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("loggedInEmail");
            window.location.href = 'login.html';
        };
    } else {
       
        loginButton.onclick = function() {
            window.location.href = 'login.html';
        };
    }
};

window.onclick = function(event) {
    if (!event.target.matches('.login-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};