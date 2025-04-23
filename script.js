// Example of interactive toggle for services section
document.addEventListener('DOMContentLoaded', function() {
  const servicesList = document.querySelectorAll('.services li');

  servicesList.forEach(item => {
    item.addEventListener('click', () => {
      alert(`You clicked on: ${item.textContent}`);
    });
  });
});
