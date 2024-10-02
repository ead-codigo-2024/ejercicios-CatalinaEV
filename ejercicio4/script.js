const form = document.getElementById('form-validation');
const nombre = document.getElementById('nombre');
const username = document.getElementById('usuario');
const email = document.getElementById('email');
const date = document.getElementById('date');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'Por favor colocar Nombre.');
    } else {
        setSuccess(nombre);
    }

    if(usernameValue === '') {
        setError(username, 'Por favor colocar Usuario.');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Por favor colocar email.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Por favor colocar correo valido.');
    } else {
        setSuccess(email);
    }

    if(dateValue === '') {
        setError(date, 'Por favor colocar Fecha de nacimiento.');
    } else {
        setSuccess(date);
    }

    if(passwordValue === '') {
        setError(password, 'Por favor colocar Contraseña.');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener al menos 8 caracteres.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Por favor confirmar Contraseña.');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden.");
    } else {
        setSuccess(password2);
    }

};