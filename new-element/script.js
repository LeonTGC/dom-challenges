const list = document.querySelector('ul')
const button = document.getElementById('button')
const input = document.getElementById('input')

button.addEventListener('click', () => {
    let item = document.createElement('li')
    item.textContent = input.value
    list.appendChild(item)
})