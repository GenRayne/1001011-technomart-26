var mapPicBtn = document.querySelector('.map-link'),
    mapModal = document.querySelector('.map-modal'),
    closeMap = mapModal.querySelector('.close-btn');

var writeBtn = document.querySelector('.write-us-btn'),
    writeModal = document.querySelector('.write-us-modal'),
    closeMessage = writeModal.querySelector('.close-btn');

mapPicBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  mapModal.classList.remove('hidden');
});

closeMap.addEventListener('click', function (ev) {
  ev.preventDefault();
  mapModal.classList.add('hidden');
});

writeBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  writeModal.classList.remove('hidden');
});

closeMessage.addEventListener('click', function (ev) {
  ev.preventDefault();
  writeModal.classList.add('hidden');
});