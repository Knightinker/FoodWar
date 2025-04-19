const buttons = document.querySelectorAll('.delivery-btn, .pickup-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Optional: remove "selected" from all buttons first, if only one should be active
    buttons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    console.log("selected");
  });
});