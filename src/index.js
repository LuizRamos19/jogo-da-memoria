const $root = document.querySelector('#root');
const $cardLanguage = document.createElement('article');
const $memoryCard = document.createElement('article');
const $icon = `
    <img 
        src="img/icon-collabcode.png" 
        alt="Gueio mascote da CollabCode" 
        class="icon"
    />
`;
const $iconLanguage = `
    <div class="circle"></div>
    <img 
        src="img/icon-c.png" 
        alt="Linguagem C++" 
        class="icon"
    />
`;

$cardLanguage.classList.add('memory-card', '-language');
$memoryCard.classList.add('memory-card');

$root.insertBefore($cardLanguage, null);
$root.insertBefore($memoryCard, null);

$cardLanguage.insertAdjacentHTML('afterbegin', $iconLanguage);
$memoryCard.insertAdjacentHTML('afterbegin', $icon);