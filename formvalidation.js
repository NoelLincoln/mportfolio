function validateEmail() {
  const emailInput = document.getElementById('email').value;
  const lowerCaseEmail = emailInput.toLowerCase();

  if (emailInput !== lowerCaseEmail) {
    document.getElementById('error').innerHTML = 'Email must be in lowercase!';
    return false;
  }
  document.getElementById('error').innerHTML = '';
  return true;
}

const submitform = document.getElementById('submitform');
submitform.addEventListener('click', () => {
  validateEmail();
});

// Function to save form data to local storage
function saveFormData() {
  const form = document.getElementById('contactform');
  const formData = {};

  // Loop through each input field in the form
  for (let i = 0; i < form.elements.length; i = +1) {
    const element = form.elements[i];
    if (element.type !== 'submit') {
      formData[element.name] = element.value;
    }
  }

  // Save the form data as a single object in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from local storage
function loadFormData() {
  const form = document.getElementById('contactform');
  const storedData = localStorage.getItem('formData');

  if (storedData) {
    const formData = JSON.parse(storedData);

    // Loop through each input field in the form
    for (let i = 0; i < form.elements.length; i = +1) {
      const element = form.elements[i];
      if (element.type !== 'submit' && formData.hasOwnProperty(element.name)) {
        element.value = formData[element.name];
      }
    }
  }
}

// Load form data when the page is loaded
window.addEventListener('load', loadFormData);

// Save form data when any input field is changed
const form = document.getElementById('myForm');
form.addEventListener('input', saveFormData);
