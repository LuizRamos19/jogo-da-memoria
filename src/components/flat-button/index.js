const flatButton = (function() {
    const module = {};

    module._id = 0;

    module._style = (active) => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .flat-button-${module._id} {
                box-sizing: border-box;
                display: inline-block;
                text-decoration: none;
                text-align: center;
                background-color: ${active ? '#f25a70' : '#eae6da'};
                color: ${active ? '#fff' : '#fffcee'};
                font-size: 24px;
                font-weight: bold;
                width: 50%;
                padding-top: 60px;
                height: 176px;
                text-transform: uppercase;
            }
        `;

        $head.insertAdjacentElement('beforeend', $style);
    };

    module.handleClick = path => {
        // o href já direciona o hash para a página correta, entretanto, como temos que utilizar o 
        // location.realod() para recarregar a página, é necessário que coloquemos o hash aqui também
        window.location.hash = `#/${path}`;
        location.reload(true);  //o reload aceita apenas um parâmetro boolean, true significa que é para recarregar utilizando o cache e naõ o servidor
    }

    module.render = (content = "", active = false, path = "") => {
        module._id++;
        module._style(active);

        return `<a href="#/${path}" 
                    class="flat-button-${module._id}"
                    onClick="flatButton.handleClick('${path}')">${content}</a>`;

    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})()