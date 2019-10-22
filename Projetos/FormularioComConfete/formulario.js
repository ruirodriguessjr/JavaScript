var list = document.querySelector('ul');
var form = document.querySelector('form');

function createLi(task) {
  var li = document.createElement('li');
  var check = document.createElement('div');
  var text = document.createElement('div');
  var remove = document.createElement('div');
  
  check.classList.add('check');
  
  
  text.classList.add('text');
  text.textContent = task.description; 
  
  check.onclick = function () { // Função que controla se meu item da lista está com check ou não.
    
    if (check == true){ 
      li.classList.remove('done');
      check = false;

    }else{
      li.classList.add('done');
      check = true;
    }
  }
  
 remove.onclick = function () {
    list.removeChild(li); // Remove o Primeiro item da Lista Filha
  }
  
  li.appendChild(check); // Adiciona uma div check na minha lista
  li.appendChild(text); // Adiciona uma div text na minha lista
  li.appendChild(remove); // Adiciona uma div remove na minha lista
  
  list.appendChild(li); // Adiciono na minha lista 
}


form.onsubmit = function (event) { // Função onde eu pelo o input e adiciono em value
  event.preventDefault();
  var input = this.querySelector('input');
  var value = input.value;
  
  input.value = ''; // deixo meu input com uma string vazia
  
  createLi({
    description: value // adiciono a minh alista o valor de value
  });
}


function remDone(){
  document.querySelectorAll("#lista li").forEach((li)=>{ // # = ID
    if(li.classList.contains("done")){ // Se conter Done na minha lista remover li da minha lista
     list.removeChild(li);
    }
  }
  );
}
function remAll(){
  
  document.querySelectorAll("#lista li").forEach( // Seleciono todos os itens da lista que forem li e removo eles.
    (li)=>{ list.removeChild(li);}
  );
}