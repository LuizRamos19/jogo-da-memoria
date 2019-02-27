const startButton = (function () {
    const module = {};

    module._style = function () {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');
        $style.textContent = `
            .start-button {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #2ed573;
                border: 3px solid #fffcee;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.1em;
                cursor: pointer;
                box-shadow: 0 4px 8px #3a4042;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <button class="start-button">Start</button>
        `;
    }

    return {
        create: module.create
    }
})();