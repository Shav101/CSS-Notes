const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formContext = new FormData(form);
  if (!Array.form(formContext.entries()).length) {
    console.log("No data received");
    return;
  }

  for (left[(key, value)] of formContext.entries()) {
    console.log(key, ":", value);
  }
});
