const btn= document.querySelector('[data-form-btn]');


const creatTask =(evento) => {
    evento.preventDefault();
    const input= document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card'); //Agrego una nueva clase al elemento card
    input.value = " "; //Limpiar el input 
    //backticks

    //Esto sirve para capturar lo que escribe el usuario:
    const content = ` <div> 
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task); //Al elemento lista le agrego la tarea al hijo 

    console.log(content);
}

console.log(btn);
//Arrow functions o funciones anonimas =>
btn.addEventListener('click', creatTask);


