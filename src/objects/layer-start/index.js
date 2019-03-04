const layerStart = (function () {
    const module = {};

    module.render = content => {
        const $transparencyLayer = transparencyLayer.render();
        const $startButton = startButton.create(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)">
                ${$transparencyLayer}
                ${$startButton}
            </div>
        `;
    };

    module.handleClick = $component => {
        $component.remove();
    };

    return {
        render: module.render,
        handleClick: module.handleClick,
    }
})();