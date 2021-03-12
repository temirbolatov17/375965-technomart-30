const buttonWriteUs = document.querySelector('.button-write-us');
const feedbackPopup = document.querySelector('.modal-feedback-form');
const feedbackClose = feedbackPopup.querySelector('.modal-close');
const feedbackForm = feedbackPopup.querySelector('.feedback-form');
const feedbackName = feedbackPopup.querySelector('.input-name');
const feedbackEmail = feedbackPopup.querySelector('.input-email');
const feedbackText = feedbackPopup.querySelector('.feedback-textarea');
const mapLink = document.querySelector('.map-link');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close');
const buyButtons = document.querySelectorAll('.buy-button');
const purchasePopup = document.querySelector('.modal-purchase');
const purchaseClose = purchasePopup.querySelector('.modal-close');
const purchaseOrderBtn = purchasePopup.querySelector('.modal-order-button');
const purchaseContinueBtn = purchasePopup.querySelector('.modal-continue-button');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-feedback-show');
  if(storage) {
    feedbackEmail.value = storage;
    feedbackName.value = storage;
    feedbackText.focus();
  } else {
    feedbackText.focus();
  }
})

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-feedback-show');
  feedbackPopup.classList.remove('modal-error');
})

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('email', feedbackEmail.value);
      localStorage.setItem('name', feedbackName.value);
    }
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('modal-feedback-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-feedback-show');
      feedbackPopup.classList.remove('modal-error');
    }
  }
})

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-map-show');
})

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-map-show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-map-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-map-show');
    }
  }
})

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
