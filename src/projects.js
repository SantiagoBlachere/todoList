export default function projects(projects) {
    const previousContainer = document.querySelector('.projectsContainer')
    if(previousContainer) {
        previousContainer.remove();
    }
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projects.forEach(project => {
        
        
        const p = document.createElement('p');
        p.innerText = project.name

        projectsContainer.appendChild(p)
    });
    const root = document.querySelector('#root');
    root.appendChild(projectsContainer)
}