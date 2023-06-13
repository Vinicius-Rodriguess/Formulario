

function esqueci(){
    alert('Parabens!! favor entrar em contato com o suporte.');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let departamento = document.getElementById('departamento').value;
    let centro = document.getElementById('centro').value;

    
    if (username === '') {
        alert('Por favor, digite o nome de usuário.');
        
    }

    if (password === '') {
        alert('Por favor, digite a senha.');
        
    }

    if (departamento === '') {
        alert('Por favor, selecione o departamento.');
        
    }

    if (centro === '') {
        alert('Por favor, selecione o centro.');
        
    }

    this.submit();
});




