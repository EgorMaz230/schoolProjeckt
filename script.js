
const links = document.querySelectorAll('.mainNav__link');

for (const link of links) {
  const tooltip = link.querySelector('.tooltip');

  link.addEventListener('mouseenter', () => {
    tooltip.classList.add('active');
  });

  link.addEventListener('mouseleave', () => {
    tooltip.classList.remove('active');
  });
}

