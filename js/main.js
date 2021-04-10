const selector = '.kaitlente';
const DOM = document.querySelector(selector);

let HTML = '';
const kiekis = 4 - 1;
for (let i = 0; i <= kiekis; i++) {
    HTML += `<span class="hotcircle"></span>`;
}

for (let i = 0; i <= kiekis; i++) {
    HTML += `<span class="switch"></span>`;
}

DOM.insertAdjacentHTML('beforeend', HTML);

const hcircle = DOM.querySelectorAll('.hotcircle');
const buttons = DOM.querySelectorAll('.switch');

for (let i = 0; i <= kiekis; i++) {
    const btn = buttons[i];
    const hc =hcircle[i];

    btn.addEventListener('click', function () {
        console.log(i);
        hc.classList.toggle('red')
    });
}

