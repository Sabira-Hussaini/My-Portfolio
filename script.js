

  const btn = document.getElementById('viewMoreBtn');
  const moreProjects = document.querySelector('.more-projects');

  btn.addEventListener('click', () => {
    moreProjects.classList.toggle('hidden');
  
    if (moreProjects.classList.contains('hidden')) {
      btn.textContent = 'View More Projects';
    } else {
      btn.textContent = 'Show Less';
     
    }
  });

  
  const form = document.querySelector(".contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      messageBox.style.color = "green";
      messageBox.textContent = "Message sent successfully";
      form.reset();

     
      messageBox.scrollIntoView({ behavior: "smooth" });

    } else {
      return response.json().then(data => {
        messageBox.style.color = "red";
        messageBox.textContent = data.error || "Error sending message";
        messageBox.scrollIntoView({ behavior: "smooth" });
      });
    }
  })
  .catch(() => {
    messageBox.style.color = "red";
    messageBox.textContent = "Error! Try again.";
    messageBox.scrollIntoView({ behavior: "smooth" });
  });
});