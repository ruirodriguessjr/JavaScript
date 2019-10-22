// var list = document.querySelector('ul');
// var form = document.querySelector('form');
var botao_adicionar = document.querySelector("#adicionar_dados");
var campo_data = document.querySelector("input[name='ano']");
var campo_nome = document.querySelector("input[name='nome']");
var corpo_tabela = document.querySelector("tbody");
var hoje = new Date();
var ano_atual = hoje.getFullYear();

// Objetos
function Entrevista(nome, ano){
  this.nome = nome;
  this.ano_informado = ano;
  this.calcula_idade = function(){
    return ano_atual - this.ano_informado;
  }
  this.mostrar_dados = function (){
    console.log("O nome é " + this.nome + 
        " o ano é " + this.ano_informado + 
        " e a idade é " + this.calcula_idade()
        )
  }
  this.criar_linha_tabela = function(){
    // Criar Elementos
    var linha = document.createElement("tr");
    var campo_nome = document.createElement("td");
    var campo_ano = documento.createElement("td");
    var campo_idade = documento.createElement("td");
    // Aplicar um estilo aos elementos
    campo_nome.className = "bold"
    // Criar Nós
    var texto_nome = document.createTextNode(this.nome);
    var texto_ano = document.createTextNode(this.ano_informado);
    var texto_idade = document.createTextNode(this.calcula_idade());
    // Vincular os Nós aos elementos
    campo_nome.appendChild(texto_nome);
    campo_ano.appendChild(texto_ano);
    campo_idade.appendChild(texto_idade);
    linha.appendChild(campo_nome);
    linha.appendChild(campo_ano);
    linha.appendChild(campo_idade);
    // Vincular os elementos ao documento
    corpo_tabela.appendChild(linha);
  }
  this.criar_pelo_template = function(){
    var template = document.querySelector("#template1");
    lista_td = template.textContent.querySelectorAll("td");
    lista_td[0].textContent = this.nome;
    lista_td[1].textContent = this.ano_informado;
    lista_td[2].textContent = this.calcula_idade();
    var nova_linha = document.importNode(template.textContent, true);
    corpo_tabela.appendChild(nova_linha);
  }
};

// Funções
function adicionar_dados(event){
  event.preventDefault();
  var ano_informado = campo_data.value;
  if (ano_informado >= 1900 && ano_informado <= ano_atual) {
    nova_entrevista = new Entrevista(campo_nome.value, campo_data.value);
    nova_entrevista.criar_linha_tabela();
  } else {
    document.querySelector(".alerta").innerText = "Data Inválida!";
  };
};

// Rotina Principal
botao_adicionar.addEventListener('click', adicionar_dados);

// function createLi(task) {
//   var li = document.createElement('li');
//   var check = document.createElement('div');
//   var text = document.createElement('div');
//   var remove = document.createElement('div');
  
//   check.classList.add('check');
  
  
//   text.classList.add('text');
//   text.textContent = task.description; 
  
//   check.onclick = function () { // Função que controla se meu item da lista está com check ou não.
    
//     if (check == true){ 
//       li.classList.remove('done');
//       check = false;

//     }else{
//       li.classList.add('done');
//       check = true;
//     }
//   }
  
//  remove.onclick = function () {
//     list.removeChild(li); // Remove o Primeiro item da Lista Filha
//   }
  
//   li.appendChild(check); // Adiciona uma div check na minha lista
//   li.appendChild(text); // Adiciona uma div text na minha lista
//   li.appendChild(remove); // Adiciona uma div remove na minha lista
  
//   list.appendChild(li); // Adiciono na minha lista 
// }


// form.onsubmit = function (event) { // Função onde eu pelo o input e adiciono em value
//   event.preventDefault();
//   var input = this.querySelector('input');
//   var value = input.value;
  
//   input.value = ''; // deixo meu input com uma string vazia
  
//   createLi({
//     description: value // adiciono a minh alista o valor de value
//   });
// }


// function remDone(){
//   document.querySelectorAll("#lista li").forEach((li)=>{ // # = ID
//     if(li.classList.contains("done")){ // Se conter Done na minha lista remover li da minha lista
//      list.removeChild(li);
//     }
//   }
//   );
// }
// function remAll(){
  
//   document.querySelectorAll("#lista li").forEach( // Seleciono todos os itens da lista que forem li e removo eles.
//     (li)=>{ list.removeChild(li);}
//   );
// }