
const colors = ['#ff7675','#55efc4','#81ecec','#74b9ff'];
    function createSquare() {
        const section = document.querySelector('section');
        const square = document.createElement('span');
        var size = Math.random()*50;

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = Math.random() * innerHeight + 'px';
        square.style.left = Math.random() * innerWidth + 'px';

        const bg = colors[Math.floor(Math.random()*colors.length)];
        console.log(Math.random()*colors.length);
        square.style.background = bg;

        section.appendChild(square);

        setTimeout(() => {
            square.remove();
        },5000);
    }
    setInterval(createSquare, 150);
