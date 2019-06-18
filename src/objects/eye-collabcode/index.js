const eyeCollab = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                background-image: url(/img/eye.png);
                background-repeat: no-repeat;
                background-position: center;
                display: block;
                text-indent: -9999px;
                width: 24px;
                height: 15px;
                cursor: pointer;
                opacity: 0.5;
                float: right;
                transition: opacity 200ms linear;
                transform: translateY(-200%);
            }

            .eye-collabcode.-active {
                opacity: 1;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    /* 
        Uma função declarada como arrow function, faz com que o escopo dele seja o mesmo escopo
        do DOM, ou seja, se tentarmos utilizar o this dentro de uma arrow function, ele vai pegar
        o window. Entretanto, se declaramos como "function", quando tentamos dar um this dentro 
        dessa function, ele passa a pegar o escopo da função e não mais da window.
    */ 
    module.handleClick = function() {
        const attrFor = this.getAttribute("for");   //Seleciona o atributo, que nesse caso é o "password"
        const $input = document.querySelector(`#${attrFor}`);   //Seleciona o input atrelado ao for acima
        
        if ($input.getAttribute("type") === "text") {
            this.classList.remove("-active");
            $input.setAttribute("type", "password");
        } else {
            this.classList.add("-active");
            $input.setAttribute("type", "text");
        }
    }

    module.render = ({attrFor = ""}) => {
        module._style();

        return `
            <label
                for="${attrFor}"
                class="eye-collabcode"
                onClick=eyeCollab.handleClick.bind(this)()>Mostrar senha</label>
        `;
        /* 
            no onClick acima, estamos mudando o escopo da variável reservada this da função
            para que quando recebermos ela dentro da função, consigamos pegar o elemento label.
            Esse bind, serve para mudar o escopo do this dentro da função handleClick, e o this
            que está sendo passado por parâmetro pelo bind é o elemento label.
        */
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();