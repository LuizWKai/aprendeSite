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

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let input = document.getElementById("search-input").value.toLowerCase();
    let items = document.querySelectorAll(".list .item");

    items.forEach(item => {
        let contentText = item.textContent.toLowerCase();

        if (contentText.includes(input) && input.trim() !== "") {
            item.classList.add("active"); // Ativa a animação
        } else {
            item.classList.remove("active"); // Esconde os que não correspondem
        }
    });
});


