const list = document.querySelectorAll('li:nth-child(even)')

for(let i = 0; i < list.length; i++){
    list[i].style.color = 'lightgreen'
}