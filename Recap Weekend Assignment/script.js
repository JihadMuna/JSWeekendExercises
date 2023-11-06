let loggedInUser = null;

const loginButton = document.querySelector('#loginButton');
const logoutButton = document.querySelector('#logoutButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const name = document.querySelector('#name').value;
    const isAdmin = document.querySelector('#isAdmin').checked;

    if (email && password) {
        loggedInUser = {
            email,
            name,
            isAdmin,
        };
        alert('Logged in successfully.');
        toggleLoginLogoutButtons(true);
    } else {
        alert('Invalid credentials.');
    }
});

logoutButton.addEventListener('click', (e) => {
    loggedInUser = null;
    alert('Logged out.');
    toggleLoginLogoutButtons(false);
});

function toggleLoginLogoutButtons(isLoggedIn) {
    loginButton.style.display = isLoggedIn ? 'none' : 'block';
    logoutButton.style.display = isLoggedIn ? 'block' : 'none';
};
