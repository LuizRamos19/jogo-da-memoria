function createMemoryCard() {
    const $memoryCard = document.createElement('article');

    const $iconCollab = `
        <img 
            src="img/icon-collabcode.png" 
            alt="Gueio mascote da CollabCode" 
            class="icon"
        />
    `;

    $memoryCard.classList.add('memory-card');
    $wrapCards.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML('afterbegin', $iconCollab);
    onClickEvent($memoryCard);
}

function createMemoryCardFront() {
    const $memoryCardFront = document.createElement('article');

    const $iconC = `
        <img 
            src="img/icon-c.png" 
            alt="Linguagem C++" 
            class="icon"
        />
    `;

    $memoryCardFront.classList.add('memory-card', '-front');
    $wrapCards.insertBefore($memoryCardFront, null);
    $memoryCardFront.insertAdjacentHTML('afterbegin', $iconC);
    onClickEvent($memoryCardFront);
}

function onClickEvent($element) {
    $element.addEventListener('click', () => {
        console.log("Clicado")
    } );
}