var slideIndex = 0;
showSlides();

function scrollToElement(paket) {
  var element = document.getElementById(paket);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
document.querySelectorAll(".footer-section img").forEach((item) => {
  item.addEventListener("click", scrollToGallery);
});

function scrollToGallery(event) {
  event.preventDefault(); // Mencegah perilaku default link

  const gallerySection = document.getElementById("gallery");
  gallerySection.scrollIntoView({ behavior: "smooth" }); // Animasi scroll ke galeri
}

// galery /////////////////////////////
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Ubah gambar setiap 2 detik
}
// galery /////////////////////////////


function plusSlides(n) {
  showSlides((slideIndex += n));
}

var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

const container = document.getElementById("container");

container.addEventListener("mouseenter", () => {
  container.style.overflowY = "scroll";
});

container.addEventListener("mouseleave", () => {
  container.style.overflowY = "hidden";
});

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};
