const deleteIcon = () =>{ //Esta función sirve para eliminar las tareas
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deteleTask);
    return i;
}
const deteleTask = (event) =>{
    const parent= event.target.parentElement;//Elemento padre
    parent.remove();
};

export default deleteIcon;