let qtdActiveMemoryCard = 0;
let count = 0;
let activeIcon = '';

function createCardsWrapper() {
    const $cardsWrapper = document.createElement('section');
    $cardsWrapper.classList.add('cards-wrapper');

    const $head = document.querySelector('head');
    let $style = document.createElement('style');
    $style.textContent = `
        .cards-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }

        .cards-wrapper > div {
            margin-bottom: 10px;
        }
    `;

    $head.insertBefore($style, null);

    $cardsWrapper.addEventListener('click', () => {
        qtdActiveMemoryCard = $cardsWrapper.querySelectorAll('.memory-card.-active:not(.-success)').length;
    });
    
    return $cardsWrapper;
}
