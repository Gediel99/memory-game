const grid = document.querySelector(".grid");

const personagens = [
    'doutor',
    'viuva',
    'aranha',
    'ferro',
    'hulk',
    'grood',
    'visao',
    'escarlate',
    'pantera',
    'thor',
    'deadpool',
    'formiga',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checarCartas = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem');
    const segundoPersonagem = segundaCarta.getAttribute('data-personagem');

    if(primeiroPersonagem == segundoPersonagem){

        primeiraCarta.firstChild.classList.add('desabilitar-carta');
        segundaCarta.firstChild.classList.add('desabilitar-carta');

        /*Zerando as cartas*/
        primeiraCarta = '';
        segundaCarta = '';

    } else {
        /*colocando um delay com seTimeout*/
        setTimeout(() => {

            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            /*Zerando as cartas*/
            primeiraCarta = '';
            segundaCarta = '';

        }, 500);
    }
}

const revelarCarta = ({target}) => {

    if (target.parentNode.className.includes('revelar-carta')){
        return;
    }

    if (primeiraCarta == ''){

        target.parentNode.classList.add('revelar-carta');
        primeiraCarta = target.parentNode;

    } else if (segundaCarta == '') {

        target.parentNode.classList.add('revelar-carta');
        segundaCarta = target.parentNode;

        checarCartas();
    }
}

const criarCarta = (personagem) => {

    const carta = createElement("div", "carta");
    const frente = createElement("div",'face frente');
    const atras = createElement("div", 'face atras');

    frente.style.backgroundImage = `url("../imagens/${personagem}.png")`;

    carta.appendChild(frente);
    carta.appendChild(atras);

    carta.addEventListener('click', revelarCarta);
    carta.setAttribute('data-personagem', personagem);

    return carta;
}

const carregarJogo = () => {

    const duplicarPersonagens = [ ...personagens, ...personagens ]; //dessa maneira consiguimos duplicar os nomes contido no array - personagens

    const sortearArray = duplicarPersonagens.sort(() => Math.random() - 0.5);

    sortearArray.forEach((personagem)=> {
        const carta = criarCarta(personagem);
        grid.appendChild(carta); //adiciona ao grid a carta aleatória criada. 
    });
}

carregarJogo();