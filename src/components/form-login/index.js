const formLogin = (function() {
    const module = {};

    module._children = () => {
        const $usernameLabel = labelCollab.render("Username ou e-mail");
        const $usernameInput = inputCollab.render({placeholder: "example@gmail.com"});

        const $passwordLabel = labelCollab.render("Password");
        const $passwordInput = inputCollab.render({id: "password", placeholder: "******", type: "password"});
        const $eyeCollab = eyeCollab.render({attrFor: "password"});

        const $linkCollab = linkCollab.render({href: "#", content: "Forget password?"});

        const $btnCollab = btnCollab.render({content: "Login", path: "game"});

        return `
            ${$usernameLabel}
            ${$usernameInput}

            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollab}

            ${$linkCollab}

            ${$btnCollab}
        `;
    }

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-signup {
                padding: 0 35px 30px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = content => {
        module._style();

        return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
    }

    return {
        render: module.render
    }
})();