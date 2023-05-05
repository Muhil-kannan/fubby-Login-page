function validateForm() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const isValidPassword = /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password);
    if (!isValidPassword) {
      document.getElementById("submit-btn").classList.add("hover-left");
      return false;
    } else {
      document.getElementById("submit-btn").classList.remove("hover-left");
      return true;
    }
  }
  
  document.getElementById("password-toggle").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.getElementById("password-toggle");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.classList.add("active");
    } else {
      passwordInput.type = "password";
      toggleBtn.classList.remove("active");
    }
  });
  
  document.getElementById("submit-btn").addEventListener("mouseover", function() {
    if (document.getElementById("submit-btn").classList.contains("hover-left")) {
      document.getElementById("submit-btn").classList.remove("hover-left");
      document.getElementById("submit-btn").classList.add("hover-up");
    } else if (document.getElementById("submit-btn").classList.contains("hover-right")) {
      document.getElementById("submit-btn").classList.remove("hover-right");
      document.getElementById("submit-btn").classList.add("hover-up");
    }
  });
  
  document.getElementById("submit-btn").addEventListener("mouseout", function() {
    if (document.getElementById("submit-btn").classList.contains("hover-up")) {
      document.getElementById("submit-btn").classList.remove("hover-up");
      if (document.getElementById("submit-btn").classList.contains("hover-left")) {
        document.getElementById("submit-btn").classList.add("hover-left");
      } else if (document.getElementById("submit-btn").classList.contains("hover-right")) {
        document.getElementById("submit-btn").classList.add("hover-right");
      }
    }
  });
  