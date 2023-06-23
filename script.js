function enviar(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const departamento = document.querySelector('#departamento').value;
    const centro = document.querySelector('#centro').value;

    if (username === '') {
        deuErro.innerHTML = `<p> Por favor, digite o nome de usuario. </p>`;        
    } else if (password === '') {
        deuErro.innerHTML = `<p> Por favor, digite a senha. </p>`;        
    } else if (departamento === '') {
        deuErro.innerHTML = `<p> Por favor, selecione o departamento. </p>`;        
    } else if(centro === '') {
        deuErro.innerHTML = `<p> Por favor, selecione o centro. </p>`;        
    } else {
        deuErro.innerHTML = `Seja Bem-Vindo! </p>`;
    }
}

const deuErro = document.querySelector('.erro');

function esqueci(){
    deuErro.innerHTML = `<p> Por favor, selecione o departamento. </p>`
}


