  // Generate twinkling stars
  const starsEl = document.getElementById('stars');
  for (let i = 0; i < 55; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 3 + 1;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --d:${(Math.random()*3+2).toFixed(1)}s;
      animation-delay:${(Math.random()*4).toFixed(1)}s;
    `;
    starsEl.appendChild(s);
  }