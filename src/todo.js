

export default function todo(todo, projects) {
    
    const root = document.querySelector('#root');
    
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('toDoCard')
    

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

    const projectForm = document.createElement('form');
    

    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'projects');
    selectLabel.innerText = 'choose project: '
    
    const projectSelect = document.createElement('select');
    projectSelect.setAttribute('name', 'projects');
    projectSelect.setAttribute('id', 'projects');
    projectSelect.classList.add('select')
    projects.forEach(project => {
        const option = document.createElement('option');
        option.classList.add(`option`);
        option.setAttribute('value', `${project.project}`);
        option.innerText = `${project.project}`
        
        
        projectSelect.appendChild(option);
    });
    
    const options = projectForm.querySelectorAll('.option');
    
    

    projectForm.onchange = handleChange;
    
    
    projectForm.appendChild(selectLabel);
    projectForm.appendChild(projectSelect);
    

    todoContainer.appendChild(projectForm);
    root.appendChild(todoContainer);
    
    function handleChange (e) {
        e.preventDefault();
       
        const selectedProject = e.target.value
        todo.project = selectedProject;
        
    }
}