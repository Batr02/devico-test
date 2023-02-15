"use strict";
function outputElements(){
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  for (let i = 1; i <= 6; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = `block-${i}`;
    block.style.backgroundColor = getRandomColor();
    container.appendChild(block);

    let count = 0;
    block.textContent = count;
    block.addEventListener('click', () => {
      count++;
      block.style.backgroundColor = getRandomColor();
      block.textContent = count;
    });
  }

  function getRandomColor() {
    const colorOptions = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += colorOptions[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}

export default outputElements;