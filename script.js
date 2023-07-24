let container = document.getElementById('container');

toggle = () => {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
};

document.getElementById('signup-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let docID = document.getElementById('doc-id').value;
  let hospitalName = document.getElementById('hospital-name').value;

  // Perform form validation and submission logic here
  // ...

  // For demonstration purposes, let's show the doctor sign-up details in the console
  console.log('Doctor Sign-up Details:');
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Doc ID:', docID);
  console.log('Hospital Name:', hospitalName);

  // Transition to the second page or perform any desired action
  container.classList.remove('sign-up');
  container.classList.add('sign-in');
});

document.getElementById('signin-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values
  let signinUsername = document.getElementById('signin-username').value;
  let signinPassword = document.getElementById('signin-password').value;

  // Perform sign-in logic here
  // ...

  // For demonstration purposes, let's show the sign-in details in the console
  console.log('Sign-in Details:');
  console.log('Username:', signinUsername);
  console.log('Password:', signinPassword);

  // Transition to the second page or perform any desired action
  container.classList.remove('sign-in');
  container.classList.add('sign-up');

  // Redirect to another page after successful login (example: dashboard.html)
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000); // Redirect after a 1-second delay (for demonstration)
});

setTimeout(() => {
  container.classList.add('sign-in');
}, 200);
