const createMemoryCard = params => `
    <article class="memory-card ${params.class}">
        <img 
            src="${params.src}" 
            alt="${params.alt}" 
            class="icon"
            onClick="handleClick()"
        />
    </article>
`;

const handleClick = () => console.log('ae');