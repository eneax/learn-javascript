// Prevent Default on links
const enea = document.querySelector('.enea');
enea.addEventListener('click', function(e) {
  const changePage = confirm(
    'This website is malicious! Do you really want to proceed?'
  );

  if (!changePage) {
    e.preventDefault();
  }
});

// Prevent Default on forms
const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
  const agreed = event.currentTarget.agree.checked;

  if (!agreed) {
    alert('You must agree to the terms and conditions!!!');
    event.preventDefault();
  }
});

// Other events on forms
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
