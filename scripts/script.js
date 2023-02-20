document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});//скрол при нажатии на кнопку к блоку с id карс
}

let buttons = document.getElementsByClassName("car-button");
for (let i = 0;i<buttons.length;i++){
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"})
    }
};//скрол при нажатии на кнопку в карточках к блоку с id price

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value ==="") {
        alert("Заполните поле имя")
    } else if (document.getElementById("phone").value ==="") {
        alert("Заполните поле телефон")
    }else if (document.getElementById("car").value ==="") {
        alert("Заполните поле автомобиль")
    } else {
        alert("Спасибо за заявку,мы свяжемся с вами в ближайшее время")
    }
}



document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 7) + 'px,' + ((event.clientY * 0.4) / 7) + 'px,0px)';
});//перемещение нижнего блока

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.4 * window.pageYOffset) + 'px';
})
});//перемещение верхнего блока