const loginButton = document.querySelector('.login-button');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginButton.addEventListener('click', e => {
	if (username.value === 'anjali123' && password.value === 'anjali789') {
		window.open('page2.html', '_blank');
	} else {
		alert('Invalid username or password');
	}
});
``