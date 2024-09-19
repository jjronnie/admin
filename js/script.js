
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet"></link>

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





// validate same pw and confirm pw
function validatePassword() {
  const password = document.querySelector('input[type="password"][placeholder="Password"]').value;
  const confirmPassword = document.querySelector('input[type="password"][placeholder="Confirm Password"]').value;
  const errorElement = document.getElementById("password-error");

  if (password !== confirmPassword) {
    errorElement.style.display = "block"; // Show the error message
    return false;
  } else {
    errorElement.style.display = "none"; // Hide the error message
    return true;
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  if (!validatePassword()) {
    event.preventDefault(); // Prevent form submission if passwords don't match
  }
});





  // Apply the fade-in effect when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });

  // Fade-out effect when clicking a link to another page
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetUrl = this.href;
      
      document.body.classList.add("fade-out");

      // Delay navigation to allow the animation to finish
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Adjust to match the CSS animation duration
    });
  });




