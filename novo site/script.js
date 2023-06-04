const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Evita que o formulário seja enviado
  event.preventDefault();

  // Valida o campo Nome
  const nomeInput = document.querySelector('#nome');
  const nomeValue = nomeInput.value.trim();
  const nomeError = document.querySelector('#nome-error');

  if (nomeValue === '') {
    nomeError.textContent = 'O campo Nome é obrigatório.';
    nomeInput.classList.add('is-invalid');
  } else {
    nomeError.textContent = '';
    nomeInput.classList.remove('is-invalid');
  }

  // Valida o campo E-mail
  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value.trim();
  const emailError = document.querySelector('#email-error');
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (emailValue === '') {
    emailError.textContent = 'O campo E-mail é obrigatório.';
    emailInput.classList.add('is-invalid');
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'O E-mail informado não é válido.';
    emailInput.classList.add('is-invalid');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('is-invalid');
  }

  // Valida o campo Telefone
  const telefoneInput = document.querySelector('#telefone');
  const telefoneValue = telefoneInput.value.trim();
  const telefoneError = document.querySelector('#telefone-error');
  const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

  if (telefoneValue === '') {
    telefoneError.textContent = 'O campo Telefone é obrigatório.';
    telefoneInput.classList.add('is-invalid');
  } else if (!telefoneRegex.test(telefoneValue)) {
    telefoneError.textContent = 'O Telefone informado não é válido. Utilize o formato (99) 99999-9999.';
    telefoneInput.classList.add('is-invalid');
  } else {
    telefoneError.textContent = '';
    telefoneInput.classList.remove('is-invalid');
  }

  // Valida o campo Data
  const dataInput = document.querySelector('#data');
  const dataValue = dataInput.value.trim();
  const dataError = document.querySelector('#data-error');
  const dataRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (dataValue === '') {
    dataError.textContent = 'O campo Data é obrigatório.';
    dataInput.classList.add('is-invalid');
  } else if (!dataRegex.test(dataValue)) {
    dataError.textContent = 'A Data informada não é válida. Utilize o formato AAAA-MM-DD.';
    dataInput.classList.add('is-invalid');
  } else {
    dataError.textContent = '';
    dataInput.classList.remove('is-invalid');
  }

  // Valida o campo Hora
  const horaInput = document.querySelector('#hora');
  const horaValue = horaInput.value.trim();
  const horaError = document.querySelector('#hora-error');
  const horaRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

  if (horaValue === '') {
    horaError.textContent = 'O campo Hora é obrigatório.';
    horaInput.classList.add('is-invalid');
  } else if (!horaRegex.test(horaValue)) {
    horaError.textContent = 'A Hora informada não é válida. Utilize o formato HH:MM.';
    horaInput.classList.add('is-invalid');
  } else {horaError.textContent = '';
  horaInput.classList.remove('is-invalid');
}

// Valida o campo Serviço
const servicoInput = document.querySelector('#servico');
const servicoValue = servicoInput.value.trim();
const servicoError = document.querySelector('#servico-error');

if (servicoValue === '') {
servicoError.textContent = 'O campo Serviço é obrigatório.';
servicoInput.classList.add('is-invalid');
} else {
servicoError.textContent = '';
servicoInput.classList.remove('is-invalid');
}

// Valida o campo Mensagem
const mensagemInput = document.querySelector('#mensagem');
const mensagemValue = mensagemInput.value.trim();
const mensagemError = document.querySelector('#mensagem-error');

if (mensagemValue === '') {
mensagemError.textContent = 'O campo Mensagem é obrigatório.';
mensagemInput.classList.add('is-invalid');
} else {
mensagemError.textContent = '';
mensagemInput.classList.remove('is-invalid');
}

// Verifica se há algum campo inválido
const invalidFields = form.querySelectorAll('.is-invalid');

if (invalidFields.length === 0) {
// Submete o formulário
form.submit();
}
});