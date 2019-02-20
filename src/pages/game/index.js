(function () {
    const $root = document.querySelector('#root');

    const $cardsWrapper = createCardsWrapper();

    const createMemoryCard = memoryCard();

    const $memoryCardWoman = createMemoryCard({
        src: 'img/icon-woman.png', 
        alt: 'Mulher codando'
    });
    const $memoryCardC = createMemoryCard({
        src: 'img/icon-c.png',
        alt: 'Ícone de um livro da linguagem C++'
    });
    const $memoryCardJava = createMemoryCard({
        src: 'img/icon-java.png', 
        alt: 'Ícone de um livro da linguagem Java'
    });
    const $memoryCardPHP = createMemoryCard({
        src: 'img/icon-php.png', 
        alt: 'Ícone de um livro da linguagem PHP'
    });

    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardPHP);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardPHP);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);

    $root.insertAdjacentElement('beforeend', $cardsWrapper);
})();