const inputCollab = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .input-collabcode {
                display: block;
                width: 100%;
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                border-bottom: 2px solid rgba(58, 64, 66, 0.5);
                padding: 12px 0 12px;
            }

            .input-collabcode + .label-collabcode {  /*esse seletor verifica se o próximo elemento irmão tem a classe indicada, para que possa ser adicionado um margin top apenas quando os elementos indicados estão seguidos*/
                margin-top: 30px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = ({placeholder = "", type = "text"}) => {
        module._style();
        // pode-se receber o parâmetro como um JSON e realizar o seguinte comando
        // const {placeholder = "", type = "text"} = props;
        return `<input class="input-collabcode" type=${type} placeholder=${placeholder}>`;
    }

    return {
        render: module.render
    }
})();