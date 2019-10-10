try {

// Модальное окно с картой

  var mapPicBtn = document.querySelector('.map-link'),
      mapModal = document.querySelector('.map-modal'),
      closeMapBtn = mapModal.querySelector('.close-btn');

  mapPicBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!writeModal.classList.contains('hidden')) {
      closeModal(writeModal);
    }

    openModal(mapModal);
    // mapModal.classList.remove('hidden');
  });

  closeMapBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    closeModal(mapModal);
  });

// Модальное окно "Напишите нам"

  var writeBtn = document.querySelector('.write-us-btn'),
      writeModal = document.querySelector('.write-us-modal'),
      closeMessageBtn = writeModal.querySelector('.close-btn');

  writeBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!mapModal.classList.contains('hidden')) {
      closeModal(mapModal);
    }

    openModal(writeModal);
    // writeModal.classList.remove('hidden');
    // writeModal.classList.add('slide-in');
  });

  closeMessageBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    closeModal(writeModal);
  });

} catch (err) {
  console.log(err);
}

try {

// Модальное окно "Товар добавлен в корзину"

  var buyBtns = document.querySelectorAll(".buy-btn"),
      addedToCartModal = document.querySelector(".added-to-cart"),
      closeAddedToCartBtn = addedToCartModal.querySelector(".close-btn"),
      continueBtn = addedToCartModal.querySelector(".continue-shopping-btn");

  for (var btn of buyBtns) {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      addedToCartModal.classList.remove('hidden');
    });
  }

  closeAddedToCartBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    addedToCartModal.classList.add('hidden');
  });

  continueBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    addedToCartModal.classList.add('hidden');
  });
} catch (err) {
  console.log(err);
}

function openModal (modal) {
  modal.classList.remove('hidden');
  modal.classList.add('slide-in');
}

function closeModal (modal) {
  modal.classList.remove('slide-in');
  modal.classList.add('slide-out');
  setTimeout(function() {
    modal.classList.remove('slide-out');
    modal.classList.add('hidden');
  }, 800);
}