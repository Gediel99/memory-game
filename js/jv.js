const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validarInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute("disabled");
        return;
    } 
    button.setAttribute("disabled", "");
}
const handleEnviar = (event) => {
    event.preventDefault();

    localStorage.setItem("jogador", input.value);
    window.location = 'html/game.html';
}

input.addEventListener('input', validarInput);
form.addEventListener('enviar', handleEnviar);