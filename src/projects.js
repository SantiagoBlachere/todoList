
import { toDosUpdated } from "./todo";


export default function projects(projects) {
    console.log(projects)
    console.log(toDosUpdated)

    const previousContainer = document.querySelector('.projectsContainer')
    if(previousContainer) {
        previousContainer.remove();
    }
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projects.forEach(project => {
        
        
        const projectBtn = document.createElement('button');
        projectBtn.innerText = project.name;
        projectBtn.classList.add('projectBtn')
        

        projectsContainer.appendChild(projectBtn)
    });
    const root = document.querySelector('#root');
    root.appendChild(projectsContainer)
    
  
}
