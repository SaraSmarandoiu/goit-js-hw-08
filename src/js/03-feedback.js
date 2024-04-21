
function saveToLocalStorage() {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  
  function fillFormFields() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      document.querySelector('input[name="email"]').value = email;
      document.querySelector('textarea[name="message"]').value = message;
    }
  }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const formData = { email, message };
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
  }
  
  
  document.querySelectorAll('.feedback-form input, .feedback-form textarea').forEach(element => {
    element.addEventListener('input', _.throttle(saveToLocalStorage, 500));
  });
  
  window.addEventListener('load', fillFormFields);
  
  document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
  
  
