const transparencyLayer = (function () {
    const module = {};

    module._style = function () {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');
        // 100 vh = % viewport height
        // 100 vw = % viewport width
        $style.textContent = `
            .transparency-layer {                
                background-color: rgba(58, 64, 66, 0.5);
                position: fixed;
                height: 100vh;
                width: 100vw;
                top: 0;
            }
            .transparency-layer.-disabled {
                opacity: 0;
                transition: all 500ms linear;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <div class="transparency-layer"></div>
        `;
    }

    return {
        render: module.render
    }
})();