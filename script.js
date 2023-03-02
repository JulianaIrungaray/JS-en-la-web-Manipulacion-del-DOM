( () => {

const btn= document.querySelector('[data-form-btn]');


const createTask =(evento) => {
    evento.preventDefault();
    const input= document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li'); //Creo elemento
    task.classList.add('card'); //Agrego una nueva clase al elemento card
    input.value = ' '; //Limpiar el input 
    //backticks
    //Esto sirve para capturar lo que escribe el usuario:
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());  //agrega el ícono check  
    taskContent.appendChild(titleTask); //Título de la tarea

    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task); //Agrego un elemento hijo dentro del elemento padre 

}

console.log(btn);
//Arrow functions o funciones anonimas =>
btn.addEventListener('click', createTask);

const checkComplete = () =>{ //Esta función sirve para poner marcar la tarea hecha
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

//Immediately invoked function expression IIFE
const completeTask = (event) => {
    const element= event.target;
    element.classList.toggle('fas'); //toggle sirve para verificar si hay una clase, si hay la quita, sino hay la agrega
    element.classList.toggle('completeIcon');
    element.classList.remove('far');
};
})();

