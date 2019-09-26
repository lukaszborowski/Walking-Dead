document.addEventListener("DOMContentLoaded", function () {

    const board = document.querySelector(".board");

    const cross = document.createElement('div');
    cross.classList.add('crosshair');
    board.appendChild(cross);

    board.addEventListener("mousemove", function (e) {
        cross.style.left = `${e.pageX - 50}px`;
        cross.style.top = `${e.pageY - 50}px`;

    });

    setInterval(function () {
        let pos;
        let div = document.createElement('div');
        div.classList.add('zombie');


        { // wazna klamerka definiuje blok kodu ktory dziala w sobie
            const min = 20;
            const max = 220;
            pos = Math.floor(Math.random() * (max - min + 1) + min);
            div.style.bottom = `${pos}px`
        } // wazna klamerka

        {
            const min = 4;
            const max = 6;
            const speed = Math.floor(Math.random() * (max - min + 1) + min);
            div.style.animationDuration = `0.3s, ${speed}s`;

        }

        div.style.zIndex = 220 - pos;
        board.appendChild(div);
        div.addEventListener('animationend', function (e) {
            div.remove();
            div = null;

        });

        div.addEventListener('mousedown', function (e) {
            div.remove();
            div = null;

        })

    }, 1000);


});
