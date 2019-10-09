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
  
  text.classList.add('text');
  text.textContent = task.description; 
  
  
  li.appendChild(text);
  list.appendChild(li);
}


