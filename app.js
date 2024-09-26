// Select all add (plus) and remove (minus) links
const addButtons = document.querySelectorAll('.add');
const removeButtons = document.querySelectorAll('.remove');
const answers = document.querySelectorAll('.answer');

// Hide all answers initially and set the remove buttons to hidden
answers.forEach(answer => answer.style.display = 'none');
removeButtons.forEach(button => button.style.display = 'none');

// Add event listener to all add buttons (to show answer)
addButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    
    const questionBlock = this.closest('.block');
    const answer = questionBlock.querySelector('.answer');
    const removeButton = questionBlock.querySelector('.remove');
    
    // Show the answer and the remove (minus) button, hide the add (plus) button
    answer.style.display = 'block';
    this.style.display = 'none';  // Hide the add button
    removeButton.style.display = 'grid';  // Show the remove button
  });
});

// Add event listener to all remove buttons (to hide answer)
removeButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    
    const questionBlock = this.closest('.block');
    const answer = questionBlock.querySelector('.answer');
    const addButton = questionBlock.querySelector('.add');
    
    // Hide the answer and the remove (minus) button, show the add (plus) button
    answer.style.display = 'none';
    this.style.display = 'none';  // Hide the remove button
    addButton.style.display = 'grid';  // Show the add button
  });
});