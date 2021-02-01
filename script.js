const addButton = document.getElementById('add')

addButton.addEventListener('click', () => addNewNote())

function AddNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `
  
  const editBtn = note.querySelector('.edit')
  const deleetBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('.textarea')

  deleteBtn.addEventListener('click', () => {
    note.remove()
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  documment.body.appendChild(note)
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