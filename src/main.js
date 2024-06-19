(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

function init(){
    let closebtn = document.getElementById("close-btn");
    closebtn.onclick = closepopup;
}
function closepopup(){
    document.getElementById("Modal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", init);