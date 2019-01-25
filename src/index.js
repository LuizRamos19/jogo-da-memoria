const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCard1 = document.createElement('article');
const $memoryCard2 = document.createElement('article');
const $memoryCardFront = document.createElement('article');

const $iconCollab = `
    <img 
        src="img/icon-collabcode.png" 
        alt="Gueio mascote da CollabCode" 
        class="icon"
    />
`;

const $iconC = `
    <img 
        src="img/icon-c.png" 
        alt="Linguagem C++" 
        class="icon"
    />
`;

$memoryCard.classList.add('memory-card');
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML('afterbegin', $iconCollab);

$memoryCardFront.classList.add('memory-card', '-front');
$root.insertBefore($memoryCardFront, $memoryCard);
$memoryCardFront.insertAdjacentHTML('afterbegin', $iconC);

$memoryCard1.classList.add('memory-card');
$root.insertBefore($memoryCard1, null);
$memoryCard1.insertAdjacentHTML('afterbegin', $iconCollab);

$memoryCard2.classList.add('memory-card');
$root.insertBefore($memoryCard2, null);
$memoryCard2.insertAdjacentHTML('afterbegin', $iconCollab);