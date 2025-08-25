
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const followed = document.getElementById('followedLinkedin').checked;

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);
    if (!validPassword) {
        document.getElementById('message').textContent = "Password must be at least 8 characters, include uppercase, lowercase, and a special character.";
        return;
    }

    if (!followed) {
        document.getElementById('message').textContent = "Please confirm you followed Pedro Penna on LinkedIn.";
        return;
    }

    // Simulate sending email to admin
    const adminEmail = "pedro.penna@example.com";
    const subject = "Lean Quiz Access Request";
    const body = `User ${email} with LinkedIn ${linkedin} requested access to the quiz database.`;
    window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.getElementById('message').textContent = "Request sent. Please wait for access approval.";
});
