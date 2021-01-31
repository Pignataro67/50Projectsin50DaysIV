const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach(note => notes.push(note.value))

  localStorage.setItem('notes', JSON.stringify(notes))
}

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