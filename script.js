let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let showingDefinition = false;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");

    let paragraph = slide.querySelector("p");
    if (paragraph) {
      paragraph.style.display = "none";
    }
  });

  slides[index].classList.add("active");

  showingDefinition = false; // Reset definition state
}

// Initial display
showSlide(currentSlide);

document.getElementById("prevBtn").addEventListener("click", function () {
  if (showingDefinition) {
    let paragraph = slides[currentSlide].querySelector("p");
    if (paragraph) {
      paragraph.style.display = "none";
    }
    showingDefinition = false;
  } else {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
  }
});

document.getElementById("nextBtn").addEventListener("click", function () {
  if (!showingDefinition) {
    let paragraph = slides[currentSlide].querySelector("p");
    if (paragraph) {
      paragraph.style.display = "block";
    }
    showingDefinition = true;
  } else {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  }
});
