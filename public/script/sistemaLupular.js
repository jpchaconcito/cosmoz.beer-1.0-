function createStar() {
    const container = document.getElementById("sistLupular")
    for (let i = 0; i < 500; i++) {
        const star = document.createElement("div");
        star.className = "star";

        let size = Math.random() * 2 + 0.1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        let tm = Math.random() * 5 + 1;
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        star.style.backgroundColor = `#${randomColor}`;
        star.style.boxShadow = `0 0 ${tm * 4}px 1px #${randomColor}`;
        star.style.borderRadius = "50%"

        star.style.top = Math.random() * 102 + "%";
        star.style.left = Math.random() * 100 + "%";

        container.appendChild(star);
    }
}
createStar();

const navbar = document.getElementById('navBar');
const inicio = document.getElementById('Inicio');
const footer = document.getElementById('footer');
const lema = document.getElementById('lema');
const equipo = document.getElementById('equipo');
const cards = document.querySelectorAll('.card');
const ecards = document.querySelectorAll('.employee-card');

const img1 = document.getElementById('pola1');
const img2 = document.getElementById('pola2');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');

const cRed = ["rgb(42, 8, 15)", "0 0 2px rgba(223, 4, 4, 1), 0 0 4px rgba(223, 4, 4, 1), 0 0 8px rgba(223, 4, 4, 1), 0 0 16px rgba(131, 7, 7, 1), 0 0 32px rgba(131, 7, 7, 1), 0 0 48px rgba(131, 7, 7, 1), 0 0 50px rgba(42, 8, 15, 1), 0 0 60px rgba(42, 8, 15, 1), 0 0 70px rgba(42, 8, 15, 1)"];

const cBlond = ["rgb(93, 32, 5)", "0 0 2px rgba(255, 217, 0, 1), 0 0 4px rgba(255, 217, 0, 1), 0 0 8px rgba(255, 217, 0, 1), 0 0 16px rgba(161, 89, 7, 1), 0 0 32px rgba(161, 89, 7, 1), 0 0 48px rgba(161, 89, 7, 1), 0 0 50px rgba(93, 32, 5, 1), 0 0 60px rgba(93, 32, 5, 1), 0 0 70px rgba(93, 32, 5, 1)"];

const cBlack = ["rgb(31, 0, 43)", "0 0 2px rgba(148, 0, 211, 1), 0 0 4px rgba(148, 0, 211, 1), 0 0 8px rgba(148, 0, 211, 1), 0 0 16px rgba(87, 38, 127, 1), 0 0 32px rgba(87, 38, 127, 1), 0 0 48px rgba(87, 38, 127, 1), 0 0 50px rgba(48, 20, 71, 1), 0 0 60px rgba(48, 20, 71, 1), 0 0 70px rgba(48, 20, 71, 1)"];

document.getElementById('pRed').addEventListener('click', function () {
    navbar.style.background = cRed[0];
    navbar.style.boxShadow = cRed[1];
    inicio.style.background = cRed[0];
    footer.style.background = cRed[0];
    footer.style.boxShadow = cRed[1];
    lema.style.textShadow = cRed[1];
    equipo.style.textShadow = cRed[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cRed[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = "0 0 16px 2px rgba(131, 7, 7, 1)";
    }

    img1.src = 'public/img/cervezaRoja.jpg';
    name1.textContent = 'Red Ipa';

    img2.src = 'public/img/cevezaFrojos.jpg';
    name2.textContent = 'Red Ale';
});

document.getElementById('pBlond').addEventListener('click', function () {
    navbar.style.background = cBlond[0];
    navbar.style.boxShadow = cBlond[1];
    inicio.style.background = cBlond[0];
    footer.style.background = cBlond[0];
    footer.style.boxShadow = cBlond[1];
    lema.style.textShadow = cBlond[1];
    equipo.style.textShadow = cBlond[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cBlond[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = " 0 0 16px 2px rgba(161, 89, 7, 1)";
    }
    
    img1.src = 'public/img/cervezaMaracuya.jpg';
    name1.textContent = 'maracuya';

    img2.src = 'public/img/cervezaMango.jpg';
    name2.textContent = 'maracuSalt';
});

document.getElementById('pBlack').addEventListener('click', function () {
    navbar.style.background = cBlack[0];
    navbar.style.boxShadow = cBlack[1];
    inicio.style.background = cBlack[0];
    footer.style.background = cBlack[0];
    footer.style.boxShadow = cBlack[1];
    lema.style.textShadow = cBlack[1];
    equipo.style.textShadow = cBlack[1];
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.boxShadow = cBlack[1];
    }
    for (let i = 0; i < ecards.length; i++) {
        ecards[i].style.boxShadow = "0 0 16px 2px rgba(87, 38, 127, 1)";
    }
    img1.src = 'public/img/chocolate2.jpg';
    name1.textContent = 'cafe';

    img2.src = 'public/img/chocolate.jpg';
    name2.textContent = 'chocolate';
});

document.getElementById('pGreen').addEventListener('click', function () {
});
