

export default function todo(todo) {
    const root = document.querySelector('#root');
    
    const todoContainer = document.createElement('div');
    

    const title = document.createElement('h2');
    title.innerText = `${todo.title}`
    todoContainer.appendChild(title);

    const description = document.createElement('p');
    description.innerText = `description: ${todo.description}`;
    todoContainer.appendChild(description);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due date: ${todo.dueDate}`;
    todoContainer.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${todo.priority}`;
    todoContainer.appendChild(priority);

    const notes = document.createElement('p');
    notes.innerText = `notes: ${todo.notes}`;
    todoContainer.appendChild(notes);

    root.appendChild(todoContainer);
}