const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

console.log(img)

let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > img.length - 1) {
      idx = 0
  } else if(idx < 0) {
      idx = img.length - 1
  }

  img.style.transform = `translateX(${-idx * 500}px)`
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