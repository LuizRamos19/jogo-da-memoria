const memoryCard = () => {
    const $head = document.querySelector('head');
    let $style = document.createElement('style');
    
    $style.textContent = `
        .memory-card {
            width: 155px;
            height: 155px;
            position: relative;
        }
        .memory-card .card {
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            position: relative;
            cursor: pointer;
            position: absolute;
        }

        .memory-card.-active .card, .memory-card.-score .card {
            display: none;
        }

        .memory-card.-active .card.-front, .memory-card.-score .card.-front {
            display: flex;
        }

        .memory-card .card.-front {
            background-color: #fff;
            display: flex;
        }

        .memory-card .card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }

        .memory-card .card > .icon {
            width: 100px;
            height: 100px;
        }

        .memory-card .card.-front > .icon {
            transform: translateY(-12px);
        }

        .memory-card .card > .icon {
            position: absolute;
        }
    `;

    $head.insertBefore($style, null);

    return ({ src, alt, nameClass }) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card -front">
                <img 
                    src="${src}" 
                    alt="${alt}" 
                    class="icon"
                />
            </article>
            <article class="card">
                <img 
                    src="img/icon-collabcode.png" 
                    alt="Gueio mascote da collabcode" 
                    class="icon"
                />
            </article>
        </div>
    `;
};

const handleClick = ($component) => {
    if (!$component.classList.contains('-active')) {
        activeMemoryCard($component);
        checkSure();
    }
};

function activeMemoryCard($component) {
    if (qtdActiveMemoryCard < 2) {
        $component.classList.add('-active')
    }
}

function checkSure() {
    if (qtdActiveMemoryCard == 1) {
        const $memoryCards = document.querySelectorAll('.memory-card.-active');
        let srcFirstCard = $memoryCards[0].querySelector('.-front .icon').getAttribute('src');
        let srcSecondCard = $memoryCards[1].querySelector('.-front .icon').getAttribute('src');

        if (srcFirstCard == srcSecondCard) {
            $memoryCards.forEach($memoryCard => {
                $memoryCard.classList.add('-score');
                $memoryCard.classList.remove('-active');
            });
            store.score++;
        } else {
            setTimeout(() => {
                $memoryCards.forEach($memoryCard => {
                    $memoryCard.classList.toggle('-active');
                });
    
                qtdActiveMemoryCard = 0;
            }, 1500);   
        }
        console.log("Quantidade de acertos", store.score)
    }
}