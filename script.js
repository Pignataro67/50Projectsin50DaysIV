const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose_insect-btn');
const start_btn = document.get('.start_btn');
const game_container = document.getElementById('game_container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener()

// const contents = document.querySelectorAll('.content')
// const listItems = document.quesrySelectorAll('nav ul li')

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