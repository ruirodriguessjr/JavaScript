var list = document.querySelector('ul');
var form = document.querySelector('form');

function createLi(task) {
  var li = document.createElement('li');
  var check = document.createElement('div');
  var text = document.createElement('div');
  var rm = document.createElement('div');
  
  check.classList.add('check');
  
  rm.classList.add('remove');
  rm.textContent = 'Remover';
  
  text.classList.add('text');
  text.textContent = task.description; 
  
  check.onclick = function () {
    
    if (check == true){
      li.classList.remove('done');
      check = false;

    }else{
      li.classList.add('done');
      check = true;
    }
  }
  
  rm.onclick = function () {
    list.removeChild(li);
  }
  
  li.appendChild(check);
  li.appendChild(text);
  li.appendChild(rm);
  
  list.appendChild(li);
}


form.onsubmit = function (event) {
  event.preventDefault();
  var input = this.querySelector('input');
  var value = input.value;
  
  input.value = '';
  
  createLi({
    description: value
  });
}


document.getElementById("retira").onclick = function() {
  var retiraLista = li.classList("done");

  for (var i = 0; i < retiraLista.length; i++) {
      if (retiraLista[i].checked = true) {
          ;
      }
  }
};


const removeDone = () => {
  
}

document.getElementById('rem').onclick() = () => removeDone();