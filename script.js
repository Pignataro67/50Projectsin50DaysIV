const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}

// const boxesContainer = document.getElementById('boxes')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// function createBoxes() {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement('div') 
//       box.classList.add('box')
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
//       boxesContainer.appendChild(box)
//     }
//   }
// }

// createBoxes()




// const contents = document.querySelectorAll('.content')
// const listItems = document.querySelectorAll('nav ul li')

// listItems.forEach((item, idx) => {
//   item.addEventListener('click', () => {
//     hideAllContents()
//     hideAllItems()

//     item.classList.add('active')
//     contents[idx].classList.add('show')
//   })
// })

// function hideAllContents() {
//   contents.forEach(content => content.classList.remove('show'))
// }

// function hideAllItems() {
//   listItems.forEach(item => item.classList.remove('active'))
// }

// const container = document.getElementById('container')
// const colors = ['#e74c3c', '8#44ad', '#3498db', '#e67e22', '#2ecc71']
// const SQUARES = 500

// for(let i = 0; i < SQUARES; i++) {
//   const square = document.createElement('div')
//   square.classList.add('square')

//  square.addEventListener('mouseover', () => setColor(square))

//  square.addEventListener('mouseout', () => removeColor(square))

//   container.appendChild(square)
// }

// function setColor(element) {
//   const color = getRandomColor()
//   element.style.background = color
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
//   element.style.background = '#1d1d1d'
//   element.style.boxShadow = '0 0 2px #000'
// }

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)]
// }