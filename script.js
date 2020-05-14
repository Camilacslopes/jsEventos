const board = document.querySelector('#board');
const input = document.querySelector('#novaTarefa');
const imgAdd = document.querySelector('#add');
const TECLA_ENTER = 13;


function adicionarTarefa(event) {
    input.style.borderColor = 'black';

    const tarefaDigitada = input.value;

    if(tarefaDigitada.trim().length <= 0){
        input.style.borderColor = 'red';
        alert('Você tem que digitar uma tarefa primeiro');
        return;
    }

    const divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa');

    const divConteudo = document.createElement("div");
     divConteudo.classList.add("col-md-8");
     divConteudo.innerText = tarefaDigitada;

     const divImg = document.createElement("div");
     divConteudo.classList.add("col-md-2");

     const imgCheck = document.createElement("img");
     imgCheck.setAttribute('src', 'img/check.png');
     imgCheck.setAttribute('class','icon');
     
     imgCheck.onclick = () => divTarefa.remove();
     divImg.appendChild(imgCheck);

     divTarefa.appendChild(divConteudo);
     divTarefa.appendChild(divImg);

     board.appendChild(divTarefa);
     input.style.borderColor = 'green';
     input.value = " "
}

input.addEventListener('keypress', (event) => {
    if(event.keyCode === TECLA_ENTER) {
       adicionarTarefa();
    }
});

imgAdd.onclick = adicionarTarefa;


