const showModalButton = document.getElementById('showModal');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const closeButton = document.getElementsByClassName('close')[0];

showModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
    modalText.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
    modalText.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalText.style.display = 'none';
    }
});
