const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
    src: 'img/icon-collabcode.png', 
    alt: 'Gueio mascote da collabcode'
});
const $memoryCardC = createMemoryCard({
    nameClass: '-front',
    src: 'img/icon-c.png',
    alt: 'Ícone de um livro da linguagem C++'
});
const $memoryCardJava = createMemoryCard({
    nameClass: '-front',
    src: 'img/icon-java.png', 
    alt: 'Ícone de um livro da linguagem Java'
});
const $memoryCardPHP = createMemoryCard({
    nameClass: '-front',
    src: 'img/icon-php.png', 
    alt: 'Ícone de um livro da linguagem PHP'
});

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);

$root.insertAdjacentElement('beforeend', $cardsWrapper);
