const input = document.getElementById('input')
const button = document.getElementById('button')
const doc = document.getElementById('doc')

button.addEventListener('click', () => {
    doc.style.backgroundColor = input.value
})