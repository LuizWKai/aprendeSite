let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicadores')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1
let mudancaNumero = 0

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    if(itemOld){
        itemOld.classList.remove('active')
    }
    items[active].classList.add('active')
    indicator.querySelector('.number').innerHTML = (active + 1)
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
}

prevButton.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1
    setSlider()
}


