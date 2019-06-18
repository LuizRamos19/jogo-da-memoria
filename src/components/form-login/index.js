const formLogin = (function() {
    const module = {};

    module._children = () => {
        const $usernameLabel = labelCollab.render("Username ou e-mail");
        const $usernameInput = inputCollab.render({placeholder: "example@gmail.com"});

        const $passwordLabel = labelCollab.render("Password");
        const $passwordInput = inputCollab.render({placeholder: "******", type: "password"});

        const $btnCollab = btnCollab.render("Login");

        return `
            ${$usernameLabel}
            ${$usernameInput}

            ${$passwordLabel}
            ${$passwordInput}

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