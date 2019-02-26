const startButton = (function () {
    const module = {};

    module._style = function () {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');
        $style.textContent = `
            .start-button {
                position: fixed;
                bottom: 0;
                width: 50%;
                transform: translateY(-20px);
                border: none;
                margin-left: 25%;

                background-color: #3a4042;
                height: 40px;
                text-align: center;
                font-family: "Comfortaa", sans-serif;
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