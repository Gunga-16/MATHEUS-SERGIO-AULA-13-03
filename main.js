
alert('bem vindo pessoal');

let nome_usuario = prompt("qual o seu nome?");

let texto = document.querySelector('span')

console.log("NOME DO USUÁRIO = " + nome_usuario);

texto.textContent = nome_usuario;