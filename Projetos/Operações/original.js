var val1 = "0";
var val2 = "0";
auxiliar = "false";
var operacao;

function armazena(num){
  if(auxiliar == "true"){
      document.calculadora.display.value = "";
      auxiliar = "false";
  }
  if (num != "10"){
      document.calculadora.display.value += num;
  }else{
      document.calculadora.display.value += ".";
  }
}


function limpaDisplay(){
  document.calculadora.display.value = "";   
}


function soma(){
  val1 = parseFloat(document.calculadora.display.value);
  val2 = parseFloat(val2);
  val2 = val1 + val2;
  operacao = "0";
  auxiliar = "true";
}


function subtracao(){
  val1 = parseFloat(document.calculadora.display.value);
  val2 = parseFloat(val2);
  cal2 = val1 - val2;
  operacao = "1";
  auxiliar = "true";
}

function divisao(){
  var result = 0;
  val2 = parseFloat(document.calculadora.display.value);
  if (val2 === '0') {
    document.calculadora.display.value = "Impossível Divisão";
  } else {
    result = parseFloat(val1 / val2);
    document.calculadora.display.value = result
  }
  operacao = "2";
  auxiliar = "true";
}

function multiplicacao(){
  val1 = parseFloat(document.calculadora.display.value);
  val2 = parseFloat(val2);
  if (val2 == 0){
      val2 = 1;
  }
  val2 = val1 * val2;
  operacao = "3";
  auxiliar = "true";
  }

function raizQuadrada(){
  valor1 = parseInt(document.calculadora.display.value);
  aux = 1;
  result = 0;
  while(val1 > 0){
      val1 = val1-aux;
      result++;
      aux += 2;
  }
  if (val1 == 0){
      document.calculadora.display.value = result;
  }else{
      document.calculadora.display.value = "Raiz Impossível de realizar!";
  }
}

function resultadoIgual(){
  val1 = parseFloat(document.calculadora.display.value);
  if(val2 != "0"){
      if (operacao == "0"){
          document.calculadora.display.value = val2 + val1;
      }else if (operacao == "1"){
          document.calculadora.display.value = val2 - val1;
      }else if (operacao == "3"){
          document.calculadora.display.value = val2 * val1;
      }else if (operacao == "2"){
          if(val1 != 0){
              document.calculadora.display.value=val2/val1;
          }else{
              document.calculadora.display.value="Impossível de dividdir por Zero!";
          }
      }
  }
  auxiliar = "false";
  val2 = "0";
}
      


