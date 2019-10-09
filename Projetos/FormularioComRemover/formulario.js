var list = document.querySelector('ul');
var form = document.querySelector('form');

form.onsubmit = function (event) {
  event.preventDefault();
  var input = this.querySelector('input');
  var value = input.value;
  
  input.value = '';
  
  createLi({
    description: value
  });
}

function createLi(task) {
  var li = document.createElement('li');
  var text = document.createElement('div');
  var rm = document.createElement('div');
  
  text.classList.add('text');
  text.textContent = task.description; 
  
  rm.classList.add('remove');
  rm.textContent = 'Remover';
  
  rm.onclick = function () {
    list.removeChild(li);
  }
  
  
  li.appendChild(text);
  li.appendChild(rm);
  list.appendChild(li);
}