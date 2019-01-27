const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard('img/icon-collabcode.png', 'Gueio mascote da collabcode');
const $memoryCardFront = createMemoryCard('img/icon-c.png', 'Ícone de um livro da linguagem C++', '-front');
const $memoryCardFrontJava = createMemoryCard('img/icon-java.png', 'Ícone de um livro da linguagem Java', '-front');
const $memoryCardFrontPHP = createMemoryCard('img/icon-php.png', 'Ícone de um livro da linguagem PHP', '-front');


$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$root.insertAdjacentElement('beforeend', $cardsWrapper);
