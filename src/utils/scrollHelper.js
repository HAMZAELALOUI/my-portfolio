export const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; // Adjust this value based on your fixed header height
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}