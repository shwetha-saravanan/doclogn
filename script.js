let container = document.getElementById('container');

const toggleSignup = () => {
  container.classList.add('slide-signin');
  container.classList.remove('slide-signup');
};

const toggleSignin = () => {
  container.classList.add('slide-signup');
  container.classList.remove('slide-signin');
};

document.getElementById('signup-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values
  // ... (Your existing form values retrieval code)

  // Perform form validation and submission logic here
  // ...

  // After successful signup, go to the signin page
  toggleSignin();
});

document.getElementById('signin-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // Retrieve form values
  // ... (Your existing form values retrieval code)

  // Perform sign-in logic here
  // ...

  // After successful signin, go to the signup page
  toggleSignup();
});

setTimeout(() => {
  container.classList.add('slide-signin');
}, 200);
