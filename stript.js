* {
    margin: 0;
    padding: 0 ;
    font-family: helvetica,Arial, Helvetica, sans-serif;
}

#container {
    height: 100vh;
    background-image: url(https://th.bing.com/th/id/R.d65046cdbd8eabaef9e263bd35654503?rik=7hsHAkf7%2bvRQ9Q&pid=ImgRaw&r=0);
    background-repeat: no-repeat;
    background-size: 100%;
}

#fundo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0px 0px 10px  rgba(0, 0, 0, 0.9);
    background: linear-gradient(120deg, rgba(0, 45, 248, 0.9), rgba(255, 0, 0, 0.9));
    padding: 40px 30px;
}

#entrar {
    padding: 5px;
    width: 200px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    box-shadow: 0px 0px 10px  rgba(0, 0, 0, 0.9);
    color: white;
    cursor: pointer;
}

#esqueci-senha{
    padding: 3px;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
}

#entrar:hover{
    background-color: rgb(221, 221, 221);
    color: black;
    transition: 0.2s;
}

#esqueci-senha:hover {
    border-bottom: solid white 1px;
}

 label {
    color: rgb(255, 252, 252);
    font-size: 15px;
}

input {
    border: none;
    border-bottom: 1px solid rgb(255, 254, 254);
    background-color: transparent;
    padding: 3px;
    outline: none;
    color: white;
}

.dentro-form {
    margin: 15px;
    text-align: center;
}

.dentro-form-info {
    margin: 15px;
    
}

#texto {
    text-align: center;
    margin: 10px;
}

#selecao {
    background-color: transparent;
    padding: 5px;
    width: 100%;
    text-align: center;
}

select {
    width: 110px;
    background-color: rgb(34, 25, 25);
    color: white;
    padding: 5px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

p {
    font-size: 12px;
    color: white;
}

h1 {
    color: white;
}

.erro {
    font-size: 15px;
    text-align: center;
    padding: 5px;
}


@media (max-width: 1100px){
  #container{
    background-image: none;
    background: linear-gradient(120deg, purple,rgb(25, 0, 255));
  }
}
