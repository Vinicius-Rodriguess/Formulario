const caixaMensagem = document.querySelector('.caixa-erro');
const esqueciSenha = document.querySelector('.esqueci-senha');
const enviar = document.querySelector('.entrar');

enviar.addEventListener('click', function(){
    enviarFormulario();
});

esqueciSenha.addEventListener('click', function(){
    esqueci();
});

function enviarFormulario() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === '' || password === '') {
        caixaMensagem.innerHTML = `Por favor, preencha todos os campos!`;
        caixaMensagem.classList.add('caixaMensagem');
        caixaMensagem.style.background = "#FF0000";
    } else if (!isNaN(username)) {
        caixaMensagem.innerHTML = `Por favor, usar letras e números!`;
        caixaMensagem.classList.add('caixaMensagem');
        caixaMensagem.style.background = "#FF0000";
    } else {
        caixaMensagem.innerHTML = `Seja Bem-Vindo!`;
        caixaMensagem.classList.add('caixaMensagem');
        caixaMensagem.style.background = "#006400";
    }
}

function esqueci(){
    caixaMensagem.innerHTML = `Contate o suporte!`
    caixaMensagem.classList.add('caixaMensagem');
    caixaMensagem.style.background = "#0000FF"; 
}
