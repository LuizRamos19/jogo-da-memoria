const shadowGame = (function () {
    const module = {};

    module._style = function () {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');
        $style.textContent = `
            .shadow-game {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                background-color: #000;
                opacity: 0.5;
            }
            .shadow-game.-disabled {
                opacity: 0;
                transition: all 500ms linear;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <div class="shadow-game"></div>
        `;
    }

    return {
        create: module.create
    }
})();