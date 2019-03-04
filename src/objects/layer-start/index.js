const layerStart = (function () {
    const module = {};

    module.render = content => {
        const $transparencyLayer = transparencyLayer.render();
        const $startButton = startButton.create(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
                ${$transparencyLayer}
                ${$startButton}
            </div>
        `;
    };

    module.handleClick = $component => {
        const $children = $component.querySelectorAll('*');

        $children.forEach($item => {
            $item.classList.add('-disabled');
        });
    };

    module.handleTransitionEnd = (event, $component) => {
        if (event.target.classList.contains('transparency-layer')) {
            $component.remove();
        }
    };

    return {
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd
    }
})();