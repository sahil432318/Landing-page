// Newsletter
function subscribe(e) {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  alert("Thanks for subscribing, " + email + "!");
  document.getElementById("newsletterEmail").value = "";
}

// Contact Form
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message").value;
  alert("Thank you " + name + "! Your message has been received:\n" + msg);
  e.target.reset();
}

// Scroll to top
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}