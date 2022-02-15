const buttonModal = document.getElementById('open-modal');
const modal = document.querySelector('.modal-wrapper');

buttonModal.onclick = function() {
  modal.classList.remove('invisible');
}

document.onkeydown = (event) => {
  let isClosed = modal.classList.contains('invisible');

  if (isClosed) {
    return;
  }

  let isEscKey = event.key === 'Escape';

  if (isEscKey) {
    modal.classList.add('invisible');
  }
}
