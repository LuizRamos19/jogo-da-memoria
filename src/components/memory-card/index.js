const createMemoryCard = card => {
    
    const { src, alt, nameClass } = card;

    return `
    <article class="memory-card ${card.nameClass}">
        <img 
            src="${card.src}" 
            alt="${card.alt}" 
            class="icon"
            onClick="handleClick()"
        />
    </article>
`;
};

const handleClick = () => console.log('ae');