import { forms } from './forms'
import swal from 'sweetalert'

export const domManipulation = () => {
    /* classes */
    class Todo {
        constructor(
            title,
            description = 'no description',
            dueDate,
            priority,
            project = 'any'
        ) {
            ;(this.title = title),
                (this.description = description),
                (this.dueDate = dueDate),
                (this.priority = priority),
                (this.project = project)
            this.any = 'any'
        }
        localStorageSet() {
            // Retrieve existing todos from local storage
            const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
            // Add the new todo to the existing todos
            existingTodos.push({ ...this });
            // Save the updated todos array back to local storage
            localStorage.setItem('todos', JSON.stringify(existingTodos)) || [];
            
        }
        removeFromLs() {
            let existingTodos = JSON.parse(localStorage.getItem('todos'))

            if (!existingTodos) {
                existingTodos = []
            }

            let nameOfTodo = this.title

            const toDoIndex = existingTodos.findIndex((todo) => {
                return todo.title === nameOfTodo
            })

            if (toDoIndex > -1) {
                existingTodos.splice(toDoIndex, 1)

                localStorage.setItem('todos', JSON.stringify(existingTodos))
            }

            
        }
    }

    class Project {
        constructor(name) {
            this.name = name
            projectsArray.push(this)
        }
        setProjectInLs() {
            const existingProjects =
                JSON.parse(localStorage.getItem('projects')) || []
            existingProjects.push(this)
            localStorage.setItem('projects', JSON.stringify(existingProjects)) || []
        }
        removeProjectFromLs() {
            let existingProjects = JSON.parse(localStorage.getItem('projects'))

            if (!existingProjects) {
                existingProjects = []
            }

            let nameOfProject = this.name

            const projectIndex = existingProjects.findIndex((project) => {
                return project.name === nameOfProject
            })

            if (projectIndex > -1) {
                existingProjects.splice(projectIndex, 1)

                localStorage.setItem(
                    'projects',
                    JSON.stringify(existingProjects)
                )
            }
            
            
        }
    }

    function getToDos() {
        let toDosFromLs = JSON.parse(localStorage.getItem('todos')) || []
        toDos = toDosFromLs
        let lsToDosWithMethods = []

        if (toDosFromLs.length > 0) {
            toDosFromLs.forEach((todo) => {
                let todoFromLs = Object.assign(new Todo(), todo)
                lsToDosWithMethods.push(todoFromLs)
                toDos = lsToDosWithMethods
            })
            
            
        } else {
            toDos = []
            
        }
        
        return toDos
    }
    function getProjects() {
        projectsFromLs = JSON.parse(localStorage.getItem('projects')) || []
        projectsArray = projectsFromLs
        let projectsWithMethods = []
        if (projectsArray.length > 0) {
            projectsArray.forEach((project) => {
                let projectFromLs = Object.assign(new Project(), project)
                projectsWithMethods.push(projectFromLs)
                
                projectsArray = projectsWithMethods
                
            })
        } else {
            projectsArray = []
        }
        console.log('projects: ',projectsArray)
        return projectsArray
    }
    /* global variables */
    let projectsFromLs
    let toDosFromLs
    let projectsArray = []
    let toDos = []
    
    getToDos()
    getProjects()

    /* DOM static sections */

    const projectsSection = document.createElement('section')
    projectsSection.classList.add('projectsSection')
    root.appendChild(projectsSection)

    const navBar = document.createElement('section')
    navBar.classList.add('navBar')
    const newProject = document.createElement('button')
    newProject.innerText = 'NEW PROJECT'
    newProject.setAttribute('name', 'newProject')
    newProject.onclick = handleClick

    const newToDo = document.createElement('button')
    newToDo.setAttribute('name', 'newToDo')
    newToDo.innerText = 'NEW TO-DO'
    newToDo.onclick = handleClick

    navBar.appendChild(newProject)
    navBar.appendChild(newToDo)
    root.appendChild(navBar)

    function handleClick(e) {
        
        let clicked = e.target.getAttribute('name')

        if (clicked === 'newProject') {
            let projectForm = forms.projectForm()

            projectForm.onsubmit = (e) => {
                e.preventDefault()
                let projectsArray = getProjects()
                console.log(projectsArray)
                let projectName = projectForm.elements['project'].value
                let alreadyExists = projectsArray.find((project) => {
                    return project.name === projectName
                })
                
                if (alreadyExists || projectName.toLowerCase() == 'any') {
                    swal({
                        title: 'Error',
                        text: `There's already a Project named "${projectName}"`,
                        icon: 'error',
                        button: 'Aww yiss!',
                    })
                    return
                }
                let newProject = new Project(projectName)
                newProject.setProjectInLs()
                
                projectsArray.push(newProject)
                console.log(projectsArray)
                renderProjects(projectsArray, toDos)
                
            }
            root.appendChild(projectForm)
        } else {
            let todoForm = forms.toDoForm()
            /* select project */
            const projectSelectDiv = document.createElement('div')
            const projectSelectLabel = document.createElement('label')
            projectSelectLabel.innerText = 'Project '
            const projectSelect = document.createElement('select')
            projectSelect.classList.add('custom-select')
            projectSelect.setAttribute('name', 'project')
            projectsArray.forEach((project) => {
                let projectOption = document.createElement('option')
                projectOption.innerText = `${project.name}`
                projectSelect.appendChild(projectOption)
            })
            const submitInput = document.createElement('input')
            submitInput.setAttribute('type', 'submit')
            submitInput.innerText = 'Add To-Do'

            todoForm.appendChild(projectSelectDiv)
            projectSelectDiv.appendChild(projectSelectLabel)
            projectSelectDiv.appendChild(projectSelect)
            todoForm.appendChild(submitInput)
            root.appendChild(todoForm)

            todoForm.onsubmit = (e) => {
                
                let date = todoForm.elements['date'].value
                const parts = date.split('-')

                const year = parts[0].slice(-2) // Get the last two characters of the year

                const month = parts[1]

                const day = parts[2]

                const formatted = `${month}/${day}/${year}`

                date = formatted
                let title = todoForm.elements['title'].value
                let description = todoForm.elements['description'].value
                let priority = todoForm.elements['priority'].value
                let project = todoForm.elements['project'].value
                let submittedTodo = new Todo(
                    title,
                    description,
                    date,
                    priority,
                    project
                )
                let alreadyExists = toDos.find((todo) => {
                    return todo.title === title
                })
                if (alreadyExists) {
                    swal({
                        title: 'Error',
                        text: `There's already a To-Do named "${title}"`,
                        icon: 'error',
                        button: 'Aww yiss!',
                    })
                    return
                }
                submittedTodo.localStorageSet()

                toDos.push(submittedTodo)
                
                renderToDo(projectsArray, toDos)
            }
        }
    }

    const toDosContainer = document.createElement('section')
    toDosContainer.classList.add('toDosSection')
    root.appendChild(toDosContainer)
    getToDos()
    getProjects()
    renderProjects(projectsArray, toDos)
    
    renderToDo(projectsArray, toDos)

    /* render a todo item */
    function renderToDo(projectsArray, toDos) {
        

        const toDosPrevious = document.querySelector('.toDoArticle')
        if (toDosPrevious) {
            toDosPrevious.remove()
        }

        const toDoArticle = document.createElement('article')
        toDoArticle.classList.add('toDoArticle')

        toDos.forEach((todo) => {
            const todoCardContainer = document.createElement('div')
            todoCardContainer.classList.add('toDoCard')
            const todoCardId = `todoCard_${todo.title.replace(/\s+/g, '_')}`
            todoCardContainer.setAttribute('id', `${todoCardId}`)

            const title = document.createElement('h2')
            title.innerText = `${todo.title}`
            todoCardContainer.appendChild(title)

            const dueDate = document.createElement('p')
            dueDate.innerText = `Due date: ${todo.dueDate}`
            todoCardContainer.appendChild(dueDate)

            if (todo.project !== 'any') {
                const project = document.createElement('p')
                project.classList.add('project')
                project.innerText = `Assigned project: ${todo.project}`
                todoCardContainer.appendChild(project)
            }
            if (todoCardContainer) {
            }
            ;(function createDetailBtn(thisToDoContainer) {
                const detailsBtn = document.createElement('button')
                let key = todo.title.replace(/[^a-zA-Z]/g, '')
                
                detailsBtn.classList.add(`${key}details`)
                detailsBtn.innerText = 'Details'
                detailsBtn.onclick = () => detailClickHandler(key)
                thisToDoContainer.appendChild(detailsBtn)

                function detailClickHandler(key) {
                    
                    thisToDoContainer.appendChild(description)
                    thisToDoContainer.appendChild(priority)
                    projectForm.appendChild(selectLabel)
                    projectForm.appendChild(projectSelect)
                    const detailsBtn = document.querySelector(`.${key}details`)
                    detailsBtn.remove()
                    const undetailedBtn = document.createElement('button')
                    undetailedBtn.innerText = 'Go Back'

                    thisToDoContainer.appendChild(undetailedBtn)

                    undetailedBtn.onclick = () => {
                        description.remove()
                        priority.remove()
                        selectLabel.remove()
                        projectSelect.remove()
                        undetailedBtn.remove()
                        createDetailBtn(thisToDoContainer)
                    }
                }
            })(todoCardContainer)

            const description = document.createElement('p')
            if (todo.description !== '') {
                description.innerText = `description: ${todo.description}`
            } else {
                description.innerText = 'No description'
            }

            const priority = document.createElement('p')
            priority.innerText = `Priority: ${todo.priority}`

            const projectForm = document.createElement('form')

            const selectLabel = document.createElement('label')
            selectLabel.setAttribute('for', 'projects')
            selectLabel.innerText = 'choose project: '

            const projectSelect = document.createElement('select')
            projectSelect.setAttribute('name', 'projects')
            projectSelect.setAttribute('id', 'projects')
            projectSelect.classList.add('select')
            const anyOption = document.createElement('option')
            anyOption.classList.add('option')
            anyOption.setAttribute('value', 'any')
            anyOption.innerText = `${'Any'}`
            projectSelect.appendChild(anyOption)
            projectsArray.forEach((project) => {
                const option = document.createElement('option')
                option.classList.add(`option`)
                option.setAttribute('value', `${project.name}`)
                option.innerText = `${project.name}`

                projectSelect.appendChild(option)
            })
            projectForm.onchange = handleChange

            todoCardContainer.appendChild(projectForm)

            function handleChange(e) {
                /* retrieves the value of the option selected */
                const selectedProject = e.target.value
                /* assigns that value to the project property of the todo */
                todo.project = selectedProject
                /* finds that todo in the todos array*/

                if (toDos) {
                    const inArray = toDos.findIndex((el) => {
                        return el.title === todo.title
                    })

                    toDos[inArray] = todo

                    
                   
                    renderToDo(projectsArray, toDos)
                }
                const inArray = toDos.findIndex((el) => {
                    return el.title === todo.title
                })
                toDos[inArray] = todo
                
                renderToDo(projectsArray, toDos)
                
            }

            const removeTodoBtn = document.createElement('button')
            removeTodoBtn.classList.add('removeBtn')
            removeTodoBtn.innerText = '❌'
            removeTodoBtn.onclick = () => {
                
                todoCardContainer.remove()

                todo.removeFromLs()
                toDos = toDos.filter( (item) => item.title !== todo.title)
                toDos.forEach((todo) => {
                    todo.localStorageSet()
                })
                
                if (toDos.length > 0) {
                    renderToDo(projectsArray, toDos)
                }
            }

            todoCardContainer.appendChild(removeTodoBtn)
            toDoArticle.appendChild(todoCardContainer)

            toDosContainer.appendChild(toDoArticle)
        })
    }
    /* project rendering */
    function renderProjects(projectsArray, toDos) {
        getToDos()
        getProjects()
        
        /* check if projects already exists, and remove it*/
        const previousContainer = document.querySelector('.projectsContainer')
        if (previousContainer) {
            previousContainer.remove()
        }
        /* if it doesnt exist, create it */
        const projectsContainer = document.createElement('div')
        projectsContainer.classList.add('projectsContainer')
        /* render any button */
        const anyBtn = document.createElement('button')
        anyBtn.innerText = 'Any'
        anyBtn.classList.add('projectBtn')
        anyBtn.setAttribute('any', 'any')
        anyBtn.addEventListener('click', () => {
            
            const toDos = getToDos();
            
        
            
            let projectToDos = toDos.filter((el) => {
                return el.any === 'any';
            });
            
        
            // Render the filtered to-dos
            renderToDo(projectsArray, projectToDos);
        });
        projectsContainer.appendChild(anyBtn)
        /* render each project as a button, if there's more than 0*/
        if (projectsArray.length > 0) {
            projectsArray.forEach((project) => {
                const buttonContainer = document.createElement('div')
                buttonContainer.classList.add('buttonProjectContainer')
                const projectBtn = document.createElement('button')
                projectBtn.innerText = project.name
                projectBtn.classList.add('projectBtn')
                projectBtn.addEventListener('click', handleClick)

                projectBtn.setAttribute('project-name', project.name)

                const removeProjectBtn = document.createElement('button')
                removeProjectBtn.innerText = 'X'
                removeProjectBtn.classList.add('removeProjectBtn')
                removeProjectBtn.setAttribute('project-name', project.name)
                buttonContainer.appendChild(projectBtn)
                buttonContainer.appendChild(removeProjectBtn)
                removeProjectBtn.onclick = (e) => {
                    
                    let projectClicked = e.target.getAttribute('project-name')
                    
                    const toDos = getToDos()
                    let filteredTodos = toDos.filter((todo) => {
                        return todo.project === projectClicked
                    })
                    filteredTodos.forEach( (todo) => {
                        todo.project = 'any'
                        todo.localStorageSet()
                        
                    })
                    project.removeProjectFromLs()
                    buttonContainer.remove()
                    
                }
                projectsContainer.appendChild(buttonContainer)
            })
            /* event listener, renders every element that corresponds with the project clicked*/
            function handleClick(e) {
                
                let projectClicked = e.target.getAttribute('project-name')
                
                
                
                let projectToDos = toDos.filter((el) => {
                    return el.project === projectClicked
                })
                
                renderToDo(projectsArray, projectToDos)
            }
        }

        projectsSection.appendChild(projectsContainer)
    }
}
