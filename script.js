const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    if (input.value === "") {
      errorMessage.textContent = `${input.placeholder} cannot be empty`;
      input.classList.add("invalid");
      form.classList.add("invalid");
    } else if (input.type === "email") {
      if (!input.value.includes("@") || !input.value.includes(".")) {
        errorMessage.textContent = "Looks like this is not an email";
        input.classList.add("invalid");
        form.classList.add("invalid");
      } else {
        errorMessage.textContent = "";
        input.classList.remove("invalid");
      }
    } else {
      errorMessage.textContent = "";
      input.classList.remove("invalid");
    }
  });
});
