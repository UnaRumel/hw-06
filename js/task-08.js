const formEl = document.querySelector(".login-form");

const handleBtnLogin = (e) => {
    e.preventDefault();
    
  const {
    elements: { email, password },
  } = e.currentTarget;
    
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Fill in all fields!");
  }
    
    console.log({ Login: email.value, Password: password.value });
    
  e.currentTarget.reset();
}

formEl.addEventListener("submit", handleBtnLogin);

