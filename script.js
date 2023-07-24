// JavaScript code for sliding effect and form submissions
let container = document.getElementById('container');

function toggle() {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
}

document.getElementById('signup-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values for doctor sign-up
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let age = document.getElementById('age').value;
  let height = document.getElementById('Height').value;
  let bmi = document.getElementById('bmi').value;
  let isObese = document.getElementById('obese').value;
  let ethnicity = document.getElementById('ethnicity').value;
  let hasPreviousGDM = document.getElementById('previous-gdm').value;

  // Perform form validation and submission logic here
  // ...

  // For demonstration purposes, let's show the doctor sign-up details in the console
  console.log('Doctor Sign-up Details:');
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Age:', age);
  console.log('Height:', height);
  console.log('BMI:', bmi);
  console.log('Is Obese:', isObese);
  console.log('Ethnicity:', ethnicity);
  console.log('Previous GDM:', hasPreviousGDM);

  // Transition to the sign-in section
  toggle();
});

document.getElementById('signin-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values for doctor sign-in
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

  // Transition to the sign-up section
  toggle();
});

// Initially show the 'sign-up' section
container.classList.add('sign-up');
