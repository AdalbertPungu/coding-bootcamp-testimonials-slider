let currentIndex = 0;

function changeTestimonial(direction) {
  const testimonials = document.querySelectorAll('.testimonial');
  currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;

  testimonials.forEach((testimonial, index) => {
    testimonial.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
  });
}
