
export const domManipulation = () => {
    /* global variables */
    const projectsArray = [{name:'any'}];
    const toDos = [];
    let toDosUpdated = [];
    /* classes */
    class Todo {
        constructor(title, description, dueDate, priority, notes) {
            this.title = title,
            this.description = description,
            this.dueDate = dueDate,
            this.priority = priority,
            this.notes = notes,
            this.project = 'any'
            toDos.push( { ...this } )
        }

        
    }
    
    class Project {
        
        constructor(name) {
            this.name = name
            projectsArray.push(this);
            
        }
        

    }
    /* toy objects to see if it works */
    const todorandom = new Todo("watarfo", "watarfo", "watarfo", "watarfo", "watarfo", );
    const todorandom2 = new Todo("watarfo2", "watarfo2", "watarfo2", "watarfo2", "watarfo2", );
    
    const projectardo = new Project('proyecto 1');
    const projectardo2 = new Project('proyecto 2');
    renderToDo(projectsArray, toDos);
   
    renderProjects(projectsArray, toDos);
    
    /* render a todo item */
    function renderToDo (projects, toDos) {
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
        option.setAttribute('value', `${project.name}`);
        option.innerText = `${project.name}`
        
        
        projectSelect.appendChild(option);
    });
    
    projectForm.onchange = handleChange;
    projectForm.appendChild(selectLabel);
    projectForm.appendChild(projectSelect);
    

    todoContainer.appendChild(projectForm);
    root.appendChild(todoContainer);
    
    function handleChange (e) {
        e.preventDefault();
       
        const selectedProject = e.target.value;
        
        todo.project = selectedProject;
        
        const inArray = toDos.findIndex((el) => {
            
            return el.title === todo.title
        })
        
        toDos[inArray] = todo;
        
        toDosUpdated = toDos;
        
        renderProjects(projectsArray, toDosUpdated)
        
        
    }
    }
    /* project rendering */
    function renderProjects(projects, toDos) {
        
        
        const previousContainer = document.querySelector('.projectsContainer')
        if(previousContainer) {
            previousContainer.remove();
        }
        
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projectsContainer');
        if (projects.length > 0) {
            projects.forEach(project => {
            
            
                const projectBtn = document.createElement('button');
                projectBtn.innerText = project.name;
                projectBtn.classList.add('projectBtn');
                projectBtn.addEventListener('click', handleClick);
                
                projectBtn.setAttribute('project-name', project.name);
                
        
                projectsContainer.appendChild(projectBtn)
            });
            
            function handleClick(e){
            e.preventDefault
            let projectClicked = e.target.getAttribute('project-name');
            let projectToDos = toDos.filter( (el) => {
                return el.project === projectClicked
            })
            renderToDo()
            }
            
        }
        
    
        const root = document.querySelector('#root');
        root.appendChild(projectsContainer)
        
        
    }
    }
    


