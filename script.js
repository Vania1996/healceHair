const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
let autoSlideInterval;

// Função para mostrar a imagem atual
function showImage(index) {
  const offset = -index * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Função para mover para a próxima imagem
function nextImage() {
  index = (index < images.length - 1) ? index + 1 : 0;
  showImage(index);
}

// Função para mover para a imagem anterior
function prevImage() {
  index = (index > 0) ? index - 1 : images.length - 1;
  showImage(index);
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 3000); // Troca a cada 3 segundos
}

// Função para parar o carrossel automático
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listeners para os botões de navegação
prevBtn.addEventListener('click', () => {
  prevImage();
  stopAutoSlide(); // Para o carrossel automático ao clicar
  startAutoSlide(); // Reinicia o carrossel automático
});

nextBtn.addEventListener('click', () => {
  nextImage();
  stopAutoSlide(); // Para o carrossel automático ao clicar
  startAutoSlide(); // Reinicia o carrossel automático
});

// Inicia o carrossel automático
startAutoSlide();

// Exibe a primeira imagem
showImage(index);
