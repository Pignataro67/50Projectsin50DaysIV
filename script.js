const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
  todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li')
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLS()
    })

    todosUL.appendChild(todoEl)

    input.value = ''

    updateLS()
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li')

  const todos = [] 
  
  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

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