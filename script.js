onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Falling Hearts Generator
  function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Using character for simplicity, or use CSS shape

    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 3; // 3-8s fall
    const size = Math.random() * 20 + 10; // 10-30px

    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.fontSize = `${size}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  setInterval(createFallingHeart, 300); // Create a heart every 300ms
};
