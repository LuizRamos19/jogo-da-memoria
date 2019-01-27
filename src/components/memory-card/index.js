const createMemoryCard = (nameClass) => `
    <article class="memory-card ${nameClass}">
        <img 
            src="${nameClass == '-front' ? 'img/icon-c.png' : 'img/icon-collabcode.png'}" 
            alt="${nameClass == '-front' ? 'Ícone de um livro de C++' : 'Gueio mascote da CollabCode'}" 
            class="icon"
            onClick="handleClick()"
        />
    </article>
`;

const handleClick = () => console.log('ae');