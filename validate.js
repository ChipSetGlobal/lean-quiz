document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const followConfirmed = document.getElementById("followConfirmation").checked;

  const passwordValid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  if (!passwordValid) {
    alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a special character.");
    return;
  }

  if (!followConfirmed) {
    alert("Please confirm that you followed Pedro Penna on LinkedIn.");
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const position = document.getElementById("position").value;
  const company = document.getElementById("company").value;
  const linkedin = document.getElementById("linkedin").value;

  const mailtoLink = `mailto:pedro.penna@example.com?subject=Lean Quiz Access Request&body=Name: ${name}%0DEmail: ${email}%0DPosition: ${position}%0DCompany: ${company}%0DLinkedIn: ${linkedin}`;
  window.location.href = mailtoLink;

  console.log("Saving to CSV:", { name, email, position, company, linkedin });

  window.location.href = "quiz.html";
});
