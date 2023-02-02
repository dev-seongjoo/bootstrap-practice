const emailInputEl = document.querySelector('#exampleInputEmail1');
const modalEl = document.querySelector('.modal fade');

modalEl.addEventListener('shown.bs.modal', function () {
  emailInputEl.focus();
})