createMemoryCard = (isFront) => {   
    let $articleClass = 'memory-card';
    let $imgSrc = 'img/icon-collabcode.png';

    if (isFront) {
        $articleClass = 'memory-card -front';
        $imgSrc = 'img/icon-c.png';
    }
    
    const $memoryCard = `
        <article class="${$articleClass}">
            <img 
                src="${$imgSrc}" 
                alt="Gueio mascote da CollabCode" 
                class="icon"
                onClick="handleClick()"
            />
        </article>
    `;

    return $memoryCard;
};

function handleClick() {
    console.log('se-');
}