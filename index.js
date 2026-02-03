const form = document.querySelector(".rating-component");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.setAttribute("aria-hidden", "true");

  const thanks = document.querySelector(".thank-you-component");

  thanks.setAttribute("aria-hidden", "false");
});
