const $root = document.querySelector('#root');

for (let i = 0; i < 7; i++) {
    const $memoryCard = document.createElement('article');
    const $memoryCardFront = document.createElement('article');
    
    createMemoryCardElement($memoryCard);
    if (i == 0) {
        createMemoryCardFrontElement($memoryCardFront, $memoryCard);
    }
}

function createMemoryCardElement($memoryCard) {

    const $iconCollab = `
        <img 
            src="img/icon-collabcode.png" 
            alt="Gueio mascote da CollabCode" 
            class="icon"
        />
    `;

    $memoryCard.classList.add('memory-card');
    $root.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML('afterbegin', $iconCollab);

    return $memoryCard;
}

function createMemoryCardFrontElement($memoryCardFront, $memoryCard) {

    const $iconC = `
        <img 
            src="img/icon-c.png" 
            alt="Linguagem C++" 
            class="icon"
        />
    `;

    $memoryCardFront.classList.add('memory-card', '-front');
    $root.insertBefore($memoryCardFront, $memoryCard);
    $memoryCardFront.insertAdjacentHTML('afterbegin', $iconC);
}