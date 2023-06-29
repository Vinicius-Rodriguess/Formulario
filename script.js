const deuErro = document.querySelector('.caixa-erro');

function enviar(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const departamento = document.querySelector('#departamento').value;
    const centro = document.querySelector('#centro').value;

    if (username === '') {
        deuErro.innerHTML = `Por favor, digite o nome de usuario.`; 
        deuErro.classList.add('erro');   
        deuErro.style.background = "red";    
    } else if (password === '') {
        deuErro.innerHTML = `Por favor, digite a senha.`;
        deuErro.classList.add('erro');   
        deuErro.style.background = "red";    
    } else if (departamento === '') {
        deuErro.innerHTML = `Por favor, selecione o departamento.`; 
        deuErro.classList.add('erro');   
        deuErro.style.background = "red";     
    } else if(centro === '') {
        deuErro.innerHTML = `Por favor, selecione o centro.`;    
        deuErro.classList.add('erro');  
        deuErro.style.background = "red";   
    } else {
        deuErro.innerHTML = `Seja Bem-Vindo!`;
        deuErro.classList.add('erro');     
        deuErro.style.background = "green";
    }
}

function esqueci(){
    deuErro.innerHTML = `Contate o suporte!`
    deuErro.classList.add('erro'); 
    deuErro.style.background = "blue"; 
}


