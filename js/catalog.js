const buyButtons = document.querySelectorAll('.buy-button');
const purchasePopup = document.querySelector('.modal-purchase');
const purchaseClose = document.querySelector('.modal-close');
const purchaseOrderBtn = document.querySelector('.modal-order-button');
const purchaseContinueBtn = document.querySelector('.modal-continue-button');

buyButtons.forEach(buyButtons => buyButtons.addEventListener('click', function(evt) {
  evt.preventDefault();
  purchasePopup.classList.add('modal-purchase-show');
}));

purchaseClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove('modal-purchase-show');
});

purchaseOrderBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove('modal-purchase-show');
});

purchaseContinueBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove('modal-purchase-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (purchasePopup.classList.contains('modal-purchase-show')) {
      evt.preventDefault();
      purchasePopup.classList.remove('modal-purchase-show');
    }
  }
});
