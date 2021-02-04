const container = document.getElementById('container')
const colors = ['#e74c3c', '8#44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// localStorage.setItem('name', JSON.stringify())
// JSON.parse(localStorage.getItem('name'))
// localStorage.removeItem('name')



// const textEl = document.getElementById('text')
// const speedEl = document.getElementById('speed')
// const text = 'We Love Programming'
// let idx = 1
// let speed = 300 / speedEl.value

// writeText()

// function writeText() {
//   textEl.innerText = text.slice(0, idx)

//   idx++

//   if(idx > text.length) {
//     idx = 1
//   }

//   setTimeout(writeText, speed)
// }

// speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)