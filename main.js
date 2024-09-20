let secret_number = getSecretNumber();
let tentativas = 5;

function getSecretNumber(){
    let numero  = Math.floor((Math.random()*10)+1);
    return numero;
}

function exibeTextoTag(tag,texto){
    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
}

function inicializaTexto(){
    exibeTextoTag('h1','Número secreto');
    exibeTextoTag('p','Digite um número de 1 a 10');
}

function verificarChute(){
    let guess = document.querySelector('input').value;
    if (tentativas > 0) {
        if (guess == secret_number) {
            exibeTextoTag('h1', 'Parabéns, você acertou!');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('chutar').setAttribute('disabled', 'true');
            document.querySelector('.container__input').setAttribute('disabled', 'true');
            exibeTextoTag('p', 'Esse é o tanto de imposto que vou te cobrar');
        } else {
            tentativas--;
            if (guess != secret_number) {
                exibeTextoTag('p', 'Você possuei ' + tentativas + ' tentativas restantes!');
                limpaInput();
            }
        }
        if (tentativas == 0) {
            exibeTextoTag('h1', 'Não podia estar mais errado!');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('chutar').setAttribute('disabled', 'true');
            document.querySelector('.container__input').setAttribute('disabled', 'true');
            exibeTextoTag('p', '');
            limpaInput();
        }
    }
}

function limpaInput(){
    document.querySelector('input').value = '';
}

function reiniciarJogo(){
    tentativas = 5;
    secret_number = getSecretNumber();
    inicializaTexto();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('chutar').removeAttribute('disabled');
    document.querySelector('.container__input').removeAttribute('disabled');
    limpaInput();
}

inicializaTexto();