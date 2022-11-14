function renderModal(form) {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  const span = document.createElement("span");

  modal.classList.add("modal");
  span.classList.add("modal_background");

  modal.append(span, form);
  body.append(modal);
}

function createModal() {
  const form = document.createElement("form");
  const div = document.createElement("div");
  const spanClose = document.createElement("span");
  const p = document.createElement("p");
  const spanInfo = document.createElement("span");
  const inputEmail = document.createElement("input");
  const button = document.createElement("button");

  form.classList.add("modal_content");
  div.classList.add("modal_close");
  spanClose.setAttribute("id", "closeBtn");

  spanClose.innerText = "X";
  p.innerText = "Digite seu e-mail";
  spanInfo.innerText = "Você receberá uma confirmação para modificação.";
  inputEmail.placeholder = "e-mail do usuário";
  button.innerText = "ENVIAR";

  div.appendChild(spanClose);

  form.append(div, p, spanInfo, inputEmail, button);

  return form;
}

function showModal() {
  const passwordChange = document.getElementById("showModal");

  passwordChange.addEventListener("click", (e) => {
    e.preventDefault();
    const modalForm = createModal();
    renderModal(modalForm);
  });
}

function closeModal() {
  const closeBtn = document.getElementById("closeBtn");

  document.addEventListener("click", (event) => {
    if (event.target.id == "closeBtn") {
      const modal = document.getElementsByClassName("modal")[0];
      modal.classList.add("close_modal");
    }
  });
}
closeModal();
showModal();
