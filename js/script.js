// Модальное окно с картой

try {
  var mapPicBtn = document.querySelector('.map-link'),
      mapModal = document.querySelector('.map-modal'),
      closeMap = mapModal.querySelector('.close-btn');

  mapPicBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    mapModal.classList.remove('hidden');
  });

  closeMap.addEventListener('click', function (ev) {
    ev.preventDefault();
    mapModal.classList.add('hidden');
  });
} catch (err) {
  console.log(err);
}

// Модальное окно "Напишите нам"

try {
  var writeBtn = document.querySelector('.write-us-btn'),
      writeModal = document.querySelector('.write-us-modal'),
      closeMessage = writeModal.querySelector('.close-btn');

  writeBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    writeModal.classList.remove('hidden');
  });

  closeMessage.addEventListener('click', function (ev) {
    ev.preventDefault();
    writeModal.classList.add('hidden');
  });
} catch (err) {
  console.log(err);
}

// Модальное окно "Товар добавлен в корзину"

try {
  var butBtns = document.querySelectorAll(".buy-btn"),
      addedToCartModal = document.querySelector(".added-to-cart"),
      closeAddedToCart = addedToCartModal.querySelector(".close-btn");

  closeAddedToCart.addEventListener('click', function (ev) {
    ev.preventDefault();
    addedToCartModal.classList.add('hidden');
  });
} catch (err) {
  console.log(err);
}