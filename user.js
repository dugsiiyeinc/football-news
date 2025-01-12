const authSwitch = document.querySelector('#authSwitch');
const authButton = document.querySelector('#authButton');
const switchForm = document.querySelector('#switchForm');
const formTitle = document.querySelector('#form-title');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

let isSignIn = true;

document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'switchForm') return;
    switchOutForm();
});

const authForm = document.querySelector('#authForm');
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        username: isSignIn ? undefined : userName.value,
        email: email.value,
        password: password.value,
        confirmPassword: isSignIn ? undefined : confirmPassword.value
    };

    if (isSignIn) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const exist = users.find(user => user.password === password.value && user.email === email.value);
        if (exist) {
            localStorage.setItem('onlUser', JSON.stringify(exist));
            alert('Sign in successful!');
            window.location.href ='headline.html';
        } else {
            alert('Invalid credentials');
            return;
        }
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === userName.value && user.email === email.value);
        if (existingUser) {
            alert(`${existingUser.username} already exists`);
            return;
        }
        if (confirmPassword.value !== password.value) {
            alert('Password mismatch');
            return;
        }
        if (password.value.trim() === '') {
            alert('Password cannot be empty');
            return;
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful");
        switchOutForm();
    }
});

function switchOutForm() {
    isSignIn = !isSignIn;
    if (isSignIn) {
        authButton.textContent = 'Sign In';
        formTitle.textContent = 'Sign In';
        userName.style.display = 'none';
        confirmPassword.style.display = 'none';
        email.value = "";
        password.value = "";
        authSwitch.innerHTML =`Don't have an account? <a href="#" id="switchForm">Sign Up</a> ;`
    } else {
        authButton.textContent = 'Sign Up';
        formTitle.textContent = 'Sign Up';
        userName.style.display = 'block';
        confirmPassword.style.display = 'block';
        userName.value = "";
        confirmPassword.value = "";
        email.value = "";
        password.value = "";
        authSwitch.innerHTML = `Already have an account? <a href="#" id="switchForm">Sign In</a>;`
    }
}