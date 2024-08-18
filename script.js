// Open the modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
}

// Attach event listeners to buttons
document.querySelector('.btn.btn-red-sm').addEventListener('click', function() {
  openModal('signinModal');
});

// Assuming you have a sign-up button somewhere; replace the selector accordingly
document.querySelector('.btn-signup').addEventListener('click', function() {
  openModal('signupModal');
});

// Attach the event listener for the Sign-Up form
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    document.getElementById('passwordError').style.display = 'block';
    return; // Exit function if passwords don't match
  }

  document.getElementById('passwordError').style.display = 'none';
  
  // Store user credentials in localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  // If passwords match, show the success message
  document.getElementById('signupSuccess').style.display = 'block';

  // Hide the form after a successful sign-up
  setTimeout(() => {
    closeModal('signupModal');
    document.getElementById('signupForm').reset();
    document.getElementById('signupSuccess').style.display = 'none';
  }, 3000); // Adjust the time as needed
});

// Attach the event listener for the Log-In form
document.getElementById('signinModal').querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const email = document.querySelector('#signinModal input[type="text"]').value;
  const password = document.querySelector('#signinModal input[type="password"]').value;

  // Retrieve user data from localStorage
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    closeModal('signinModal');
    alert('Login successful!');
  } else {
    alert('Invalid email or password.');
  }
});

function toggleAnswer(faqbox) {
  faqbox.classList.toggle("active");

  // Find the answer element and toggle its visibility
  let answer = faqbox.querySelector(".answer");
  if (faqbox.classList.contains("active")) {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
