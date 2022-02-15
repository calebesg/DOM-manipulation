const buttonModal = document.getElementById('open-modal');
const modal = document.querySelector('.modal-wrapper');

buttonModal.onclick = showModal;

document.onkeydown = (event) => {
  let isClosed = modal.classList.contains('invisible');

  if (isClosed) {
    return;
  }

  hiddenModal(event.key);
}

function showModal() {
  modal.classList.remove('invisible');
}

function hiddenModal(keyPressed) {

  if (keyPressed === 'Escape') {
    modal.classList.add('invisible');
  }
}