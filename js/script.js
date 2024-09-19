function toggleLoginPasswordVisibility() {
  var passwordInput = document.getElementById('login-password');
  var passwordIcon = document.getElementById('login-password-icon');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
  }
}



function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirm-password');
  var passwordIcon = document.getElementById('password-icon');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text'; // Ensure confirm password also shows
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password'; // Hide confirm password
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
  }
}






// Password validation function
function validatePassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorElement = document.getElementById("password-error");

  if (password !== confirmPassword) {
      errorElement.style.display = "block"; // Show the error message
      return false;
  } else {
      errorElement.style.display = "none"; // Hide the error message
      return true;
  }
}

// Form submission handling
document.querySelector('form').addEventListener('submit', function (event) {
  if (!validatePassword()) {
      event.preventDefault(); // Prevent form submission if passwords don't match
  }
});

// Function to ensure only numbers are entered in the phone field and display error if needed
document.getElementById('phone').addEventListener('input', function (event) {
  var errorElement = document.getElementById('phone-error');
  // Check if input contains any non-numeric characters
  if (/[^0-9]/.test(this.value)) {
      errorElement.style.display = 'block'; // Show error message
      errorElement.textContent = 'Please enter a valid phone number';
  } else {
      errorElement.style.display = 'none'; // Hide error message when input is valid
  }
  // Replace any non-numeric characters
  this.value = this.value.replace(/[^0-9]/g, '');
});






