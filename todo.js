const display_tasks = document.querySelector(".display_tasks");
const task_input =  document.querySelector("input")
const add = document.querySelector(".add > button");

let list_of_items = []

function save_to_local() {
    localStorage['list_of_items'] = display_tasks.innerHTML
}

function complete() {
    if (task_input.value.trim() == '') {
        return
    }
    const status = document.createElement('div')
    status.classList.add('circle')
    const task = document.createElement('div')
    const item = document.createElement('div')
    const del = document.createElement('button')
    del.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    del.addEventListener('click', () => {del.parentElement.remove()})
    item.classList.add('item')
    item.append(status, task, del)
    task.innerText = task_input.value
    task.classList.add('task')
    item.addEventListener('click', () => {item.classList.toggle('completed'); save_to_local()})
    display_tasks.append(item)
    save_to_local()
    task_input.value = ''
}
add.addEventListener('click', complete)

function recover_session() {
    let list_of_items = localStorage.getItem('list_of_items')
    display_tasks.innerHTML = list_of_items 
    let items = document.querySelectorAll('.item')
    items.forEach(element => {
        element.addEventListener('click', () => {element.classList.toggle('completed'); save_to_local()})
        let del = element.querySelector('button')
        del.addEventListener('click', () => {del.parentElement.remove()})
    });
}
 
window.onload = recover_session;