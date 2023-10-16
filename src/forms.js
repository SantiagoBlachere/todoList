export const forms = (function() {
  function checkIfItExists() {
    let previousForm = document.querySelectorAll('.form');
    console.log(previousForm)
    if (previousForm.length > 0) {
        previousForm.forEach((form) => {
            form.remove();
        })
        
    } 
  };
    function createProjectForm() {
      // Create and return the HTML for the project form
      checkIfItExists();
      let projectForm = document.createElement('form');
      projectForm.classList.add('form');
      
      
        
      return projectForm;
    }
  
    function createToDoForm() {
      // Create and return the HTML for the to-do form
      checkIfItExists();
      let todoForm = document.createElement('form');
      todoForm.classList.add('form')
      /* title input: */
      let divTitle = document.createElement('div');
      let divTitleLabel = document.createElement('label');
      divTitleLabel.setAttribute('for', 'title');
      divTitleLabel.innerText = 'Title: ';
      let divTitleInput = document.createElement('input');
      divTitleInput.setAttribute('type', 'text');
      divTitleInput.setAttribute('name', 'title');
      divTitleInput.setAttribute('id', 'title');
      divTitleInput.setAttribute('required', true);
      
      divTitle.appendChild(divTitleLabel);
      divTitle.appendChild(divTitleInput);
      /* priority input: */
      let divPriority = document.createElement('div');
      let select = document.createElement('select');
      select.setAttribute('id', 'select')
      let divPriorityLabel = document.createElement('label');
      divPriorityLabel.setAttribute('for', 'select');
      divPriorityLabel.innerText = 'Priority: ';
          /* options */
      let divPriorityLow = document.createElement('option');
      divPriorityLow.setAttribute('value', 'Low');
      divPriorityLow.setAttribute('name', 'low');
      divPriorityLow.setAttribute('selected', true);
      divPriorityLow.setAttribute('required', true);
      divPriorityLow.innerText = 'Low';

      let divPriorityMid = document.createElement('option');
      divPriorityMid.setAttribute('value', 'Mid');
      divPriorityMid.setAttribute('name', 'mid');
      divPriorityMid.setAttribute('required', true);
      divPriorityMid.innerText = 'Mid';
     
      let divPriorityHigh = document.createElement('option');
      divPriorityHigh.setAttribute('value', 'High');
      divPriorityHigh.setAttribute('name', 'priority');
      divPriorityHigh.setAttribute('required', true);
      divPriorityHigh.innerText = 'High';
      
      divPriority.appendChild(divPriorityLabel);
      divPriority.appendChild(select);
      select.appendChild(divPriorityLow);
      select.appendChild(divPriorityMid);
      select.appendChild(divPriorityHigh);
      select.setAttribute('name', 'priority')

      /* description input */
      let divDescription = document.createElement('div');
      let divDescriptionLabel = document.createElement('label');
      divDescriptionLabel.setAttribute('for', 'description');
      divDescriptionLabel.innerText = 'Description: ';
      let divDescriptionInput = document.createElement('input');
      divDescriptionInput.setAttribute('type', 'text');
      divDescriptionInput.setAttribute('name', 'description');
      divDescriptionInput.setAttribute('id', 'description');
      
      divDescription.appendChild(divDescriptionLabel);
      divDescription.appendChild(divDescriptionInput);

      /* Due date input */
      let divDate = document.createElement('div');
      let divDateLabel = document.createElement('label');
      divDateLabel.setAttribute('for', 'date')
      divDateLabel.innerText = 'Due date: '
      let divDateInput = document.createElement('input');
      divDateInput.setAttribute('type', 'date');
      divDateInput.setAttribute('id', 'date');
      divDateInput.setAttribute('name', 'date');

      divDate.appendChild(divDateLabel);
      divDate.appendChild(divDateInput);


      

      
      
      
      let divNotes = document.createElement('div');
      let divProject = document.createElement('div');
      todoForm.appendChild(divTitle);
      todoForm.appendChild(divPriority);
      todoForm.appendChild(divDescription);
      todoForm.appendChild(divDate);
      todoForm.appendChild(divProject);
      return todoForm;
    }
  
    // Expose the functions you want to make public
    return {
      projectForm: createProjectForm,
      toDoForm: createToDoForm,
    };
  })();