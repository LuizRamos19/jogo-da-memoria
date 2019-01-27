const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard({src: 'img/icon-collabcode.png', alt: 'Gueio mascote da collabcode'});
const $memoryCardFront = createMemoryCard({src: 'img/icon-c.png', alt: 'Ícone de um livro da linguagem C++', class: '-front'});
const $memoryCardFrontJava = createMemoryCard({src: 'img/icon-java.png', alt: 'Ícone de um livro da linguagem Java', class: '-front'});
const $memoryCardFrontPHP = createMemoryCard({src: 'img/icon-php.png', alt: 'Ícone de um livro da linguagem PHP', class: '-front'});

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$root.insertAdjacentElement('beforeend', $cardsWrapper);
