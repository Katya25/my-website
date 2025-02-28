// Эффект "печатной машинки" (typewriter) для заголовка #typewriter
const text = "HELLO, I'M YOUR RETRO DEV!";
const speed = 100; // Скорость печати (мс)
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // учитываем высоту шапки
        behavior: "smooth",
      });
    }
  });
});

//при нажатии на проект инфа о нем 
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

//эффекты дл города 
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Пример: самый близкий слой (layer1) движется сильнее
  document.getElementById("layer1").style.transform =
    `translateY(${scrollTop * 0.4}px)`;

  // Следующий слой чуть медленнее
  document.getElementById("layer2").style.transform =
    `translateY(${scrollTop * 0.3}px)`;

  document.getElementById("layer3").style.transform =
    `translateY(${scrollTop * 0.2}px)`;

  document.getElementById("layer4").style.transform =
    `translateY(${scrollTop * 0.1}px)`;

  // Самый дальний слой почти не двигается
  document.getElementById("layer5").style.transform =
    `translateY(${scrollTop * 0.05}px)`;
});


// Простейшая обработка формы
//document.getElementById("contact-form").addEventListener("submit", function (e) {
//  //e.preventDefault();
//  alert("Thank you for your message!");
//  this.reset();
//});

//////////////////////////////////////
// СЛУЧАЙНЫЕ ПОЛОСКИ МАТРИЦЫ (ФИОЛЕТОВЫЕ, 
// верхняя часть прозрачная)
//////////////////////////////////////

// Символы «Матрицы»
const matrixChars = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function spawnMatrixLine() {
  // Создаём элемент
  const line = document.createElement('div');
  line.className = 'matrix-line';

  // Генерируем случайную длину (5..15 символов)
  const length = Math.floor(Math.random() * 31) + 5;
  let str = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * matrixChars.length);
    str += matrixChars[randIndex];
  }
  line.textContent = str;

  // Случайная позиция по горизонтали
  const lineWidth = 20; // Ширина столбца, подберите под font-size
  const x = Math.floor(Math.random() * (window.innerWidth - lineWidth));
  line.style.left = x + "px";

  // Добавляем в документ
  document.body.appendChild(line);

  // Удаляем элемент после 2.5с (время анимации)
  setTimeout(() => {
    line.remove();
  }, 2500);
}

// Каждую секунду (1000мс) с вероятностью 20% (0.2) генерируем полоску
setInterval(() => {
  if (Math.random() < 0.3) {
    spawnMatrixLine();
  }
}, 1000);

