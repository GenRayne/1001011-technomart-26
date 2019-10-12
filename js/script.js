try {
  // Модальное окно с картой

  var mapPicBtn = document.querySelector('.map-link'),
      mapModal = document.querySelector('.map-modal'),
      closeMapBtn = mapModal.querySelector('.close-btn');

  mapPicBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!writeModal.classList.contains('hidden') || !addedToCartModal.classList.contains('hidden')) {
      closeModal(writeModal);
      closeModal(addedToCartModal);
    }

    openModal(mapModal);
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

    if (!mapModal.classList.contains('hidden') || !addedToCartModal.classList.contains('hidden')) {
      closeModal(mapModal);
      closeModal(addedToCartModal);
    }

    openModal(writeModal);
  });

  closeMessageBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    closeModal(writeModal);
  });

  // Нижний слайдер с Сервисами

  var tabs = document.querySelectorAll('.tab'),
      services = document.querySelectorAll('.service');

  for (var tab of tabs) {
    tab.addEventListener('click', function (ev) {
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('tab-active');
      }
      ev.target.classList.add('tab-active');

      for (var service of services) {
        if (ev.target.dataset.tab === service.dataset.content) {
          for (var j = 0; j < services.length; j++) {
            services[j].classList.remove('service-active');
          }
          service.classList.add('service-active');
        }
      }
    });
  }

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

      if (mapModal || writeModal) {
        if (!mapModal.classList.contains('hidden') || !writeModal.classList.contains('hidden')) {
          closeModal(mapModal);
          closeModal(writeModal);
        }
      }

      openModal(addedToCartModal);
    });
  }

  closeAddedToCartBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    closeModal(addedToCartModal);
  });

  continueBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    closeModal(addedToCartModal);
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
  }, 600);
}