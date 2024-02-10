function shrinkNo() {
  var noBtn = document.getElementById('noBtn');
  var yesBtn = document.getElementById('yesBtn');
  var currentFontSize = parseInt(window.getComputedStyle(noBtn, null).getPropertyValue('font-size'));
  if (currentFontSize > 10) {
    noBtn.style.fontSize = (currentFontSize - 2) + 'px';
    yesBtn.style.fontSize = (currentFontSize * 2) + 'px';
  }
}
function enlargeYes() {
  var yesBtn = document.getElementById('yesBtn');
  var currentFontSize = parseInt(window.getComputedStyle(yesBtn, null).getPropertyValue('font-size'));
  yesBtn.style.fontSize = (currentFontSize * 1.5) + 'px'; // Увеличиваем размер кнопки "Да"
  if (currentFontSize < 100) { // Проверяем, не достигли ли мы предельного размера
    setTimeout(enlargeYes, 500); // Вызываем функцию enlargeYes() через 500 миллисекунд
  }
}

function showMessage(message) {
  alert(message);
}