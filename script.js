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

  // Transition to the sign-in section or perform any desired action
  toggle();

  // You can add any other action you want after the sign-up button is clicked.
  // For example, showing a success message or redirecting to another page.
});

document.getElementById('signin-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values
  let signinUsername = document.getElementById('signin-username').value;
  let signinPassword = document.getElementById('signin-password').value;

  // Perform sign-in logic here (simple example with hardcoded credentials)
  // Replace these hardcoded credentials with your actual authentication logic
  const correctUsername = "johnDoe";
  const correctPassword = "123456";

  if (signinUsername === correctUsername && signinPassword === correctPassword) {
    console.log("Sign-in successful!");
    // Redirect to another page after successful login (example: dashboard.html)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000); // Redirect after a 1-second delay (for demonstration)
  } else {
    console.log("Invalid credentials. Please try again.");
  }

  // Transition to the sign-up section or perform any desired action
  toggle();
});

// The setTimeout is no longer needed since we are initially showing the 'sign-up' section.
