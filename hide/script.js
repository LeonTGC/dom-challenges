const button = document.getElementById('button')
const img = document.querySelector('img')

button.addEventListener('click', () => {  
    if(img.style.display === 'inline'){
        img.style.display = 'none'
        button.textContent = 'show'
    }else {
        img.style.display = 'inline'
        button.textContent = 'hide'
    }
})