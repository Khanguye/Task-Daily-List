function validateForm(form) {
  const messageBox = document.querySelector("#formMessage");
  const fields = form.querySelectorAll("input, textarea, select");
  const emailInput = form.querySelector('input[type="email"]');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for (const field of fields) {
    if (!field.value.trim()) {
      showMessage(messageBox, `${getFieldLabel(field)} is required.`, "error");
      field.focus();
      return false;
    }
  }

  if (emailInput && !emailPattern.test(emailInput.value.trim())) {
    showMessage(messageBox, "Please enter a valid email address.", "error");
    emailInput.focus();
    return false;
  }

  showMessage(messageBox, "Form submitted successfully.", "success");
  return true;
}

function getFieldLabel(field) {
  const label = field.closest("label");
  return label ? label.firstChild.textContent.trim() : field.name || "This field";
}

function showMessage(element, text, type) {
  element.textContent = text;
  element.className = `message ${type}`;
}

const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm(form);
});
