const formEl = document.querySelector(".login-form");
// const emailEl = formEl.querySelector('[type="email"]');
// const passwordEl = formEl.querySelector('[type="password"]');

const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formData = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    window.alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(formData);
  }

  event.currentTarget.reset();
};
formEl.addEventListener("submit", onFormSubmit);
