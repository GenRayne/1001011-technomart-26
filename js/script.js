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
      closeMessageBtn = writeModal.querySelector('.close-btn'),

      nameInput = writeModal.querySelector('.name-input input'),
      emailInput = writeModal.querySelector('.email-input input'),
      messageInput = writeModal.querySelector('.message-input textarea'),
      sendBtn = writeModal.querySelector('.send-btn');

  var storage = {};  
  storage.support = true;

  try {
    storage.name = localStorage.getItem('name') || '';
    storage.email = localStorage.getItem('email') || '';
  } catch (err) {
    console.log(err);
    storage.support = false;
  }

  writeModal.addEventListener('submit', function (ev) {
    if (!messageInput.value || !nameInput.value || !emailInput.value) {
      ev.preventDefault();
      writeModal.classList.add('shake');
      writeModal.addEventListener('animationend', function () {
        writeModal.classList.remove('shake');
      });
      checkValue(nameInput);
      checkValue(emailInput);
      checkValue(messageInput);
    } else {
      if (storage.support) {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
      }
    }
  });

  writeBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!mapModal.classList.contains('hidden') || !addedToCartModal.classList.contains('hidden')) {
      closeModal(mapModal);
      closeModal(addedToCartModal);
    }
    openModal(writeModal);
    nameInput.focus();

    nameInput.value = storage.name;
    emailInput.value = storage.email;
    if (nameInput.value) {
      emailInput.focus();
    }
    if (emailInput.value) {
      messageInput.focus();
    }
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

  var buyBtns = document.querySelectorAll('.buy-btn'),
      addedToCartModal = document.querySelector('.added-to-cart'),
      closeAddedToCartBtn = addedToCartModal.querySelector('.close-btn'),
      continueBtn = addedToCartModal.querySelector('.continue-shopping-btn');

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
  modal.addEventListener('animationend', function () {
    modal.classList.remove('slide-in');
  });
}

function closeModal (modal) {
  modal.classList.add('slide-out');
  modal.addEventListener('animationend', hideModal);
}

function hideModal () {
  this.classList.remove('slide-out');
  this.classList.add('hidden');
  this.removeEventListener('animationend', hideModal);
}

function checkValue (input) {
  if (!input.value) {
    input.classList.add('red-paint');
  }
  input.addEventListener('animationend', function () {
    input.classList.remove('red-paint');
  });
}