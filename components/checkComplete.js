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
    element.classList.toggle('far');
};

export default checkComplete;