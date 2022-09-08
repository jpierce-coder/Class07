function backgroundToBlue() {
  document.getElementById('body').style.backgroundColor = 'lightblue'
}

function colorChanged() {
  console.log('Color Changed');
  const colorVar = this.value;
  document.body.style.backgroundColor = colorVar;
  const p = document.createElement('p');
  p.innerHTML = 'The form submission';
  document.appendChild(p);
}

// const userColor = document.getElementById('backgroundColorInput');
// userColor.addEventListener('change', colorChanged);





