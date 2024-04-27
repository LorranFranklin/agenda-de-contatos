const form = document.querySelector("form");
const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("name");
const inputTelefone = document.getElementById("Telefone");
const msg = document.querySelector("#msg");

const contatos = [];
const numCtt = [];
let linhas = "";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addRow();
  updateTable();
});

function addRow() {
  if (contatos.includes(inputNome.value)) {
    msg.innerHTML = `O contato: ${inputNome.value}, já foi inserido.`;
  } else if (numCtt.includes(parseFloat(inputTelefone.value))) {
    msg.innerHTML = `O Número de telefone: ${inputTelefone.value}, já foi inserido.`;
  } else if (inputTelefone.value.length < 8) {
    msg.innerHTML = `O número de telefone deve ter pelo menos 8 digitos`;
  } else {
    contatos.push(inputNome.value);
    numCtt.push(parseFloat(inputTelefone.value));

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    msg.innerHTML = "";

    clearFields();
  }
}

function updateTable() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function clearFields() {
  // Limpar os campos do formulário
  inputEmail.value = "";
  inputNome.value = "";
  inputTelefone.value = "";
}
