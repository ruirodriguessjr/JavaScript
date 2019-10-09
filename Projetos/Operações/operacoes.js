
var val1 = "0";
var val2 = "0";
auxiliar = "false";
var calculo;

function armazena(num){
  if(auxiliar == "true"){
      document.calc.tela.value = "";
      auxiliar = "false";
  }
  if (num != "10"){
      document.calc.tela.value += num;
  }else{
      document.calc.tela.value += ".";
  }
}


function limpaTela(){
  document.calc.tela.value = "";   
}


function soma(){
  val1 = parseFloat(document.calc.tela.value);
  val2 = parseFloat(val2);
  val2 = val1 + val2;
  calculo = "0";
  auxiliar = "true";
}


function subtracao(){
  val1 = parseFloat(document.calc.tela.value);
  val2 = parseFloat(val2);
  cal2 = val1 - val2;
  calculo = "1";
  auxiliar = "true";
}

function divisao(){
  val2 = parseFloat(document.calc.tela.value);
  calculo = "2";
  auxiliar = "true";
}

function multiplicacao(){
  val1 = parseFloat(document.calc.tela.value);
  val2 = parseFloat(val2);
  if (val2 == 0){
      val2 = 1;
  }
  val2 = val1 * val2;
  calculo = "3";
  auxiliar = "true";
  }

function raizQuadrada(){
  val1 = parseInt(document.calc.tela.value);
  aux = 1;
  result = 0;
  while(val1>0){
      val1 = val1-aux;
      result++;
      aux += 2;
  }
  if (val1 == 0){
      document.calc.tela.value = result;
  }else{
      document.calc.tela.value = "Raiz Impossível de realizar!";
  }
}

function resultadoIgual(){
  val1 = parseFloat(document.calc.tela.value);
  if(val2 != "0"){
      if (calculo == "0"){
          document.calc.tela.value = val2 + val1;
      }else if (calculo == "1"){
          document.calc.tela.value = val2 - val1;
      }else if (calculo == "3"){
          document.calc.tela.value = val2 * val1;
      }else if (calculo == "2"){
          if(val1 != 0){
              document.calc.tela.value=val2/val1;
          }else{
              document.calc.tela.value="Impossível de dividdir por Zero!";
          }
      }
  }
  auxiliar = "false";
  val2 = "0";
}
      


