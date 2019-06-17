const formSignup = (function() {
    const module = {};

    module._children = () => {
        const $emailLabel = labelCollab.render("E-mail");
        const $emailInput = inputCollab.render("example@gmail.com");

        const $usernameLabel = labelCollab.render("Username");
        const $usernameInput = inputCollab.render("example");

        const $passwordLabel = labelCollab.render("Password");
        const $passwordInput = inputCollab.render("******");

        const $confirmPasswordLabel = labelCollab.render("Confirm Password");
        const $confirmPasswordInput = inputCollab.render("******");

        const $btnCollab = btnCollab.render("Submit");

        return `
            ${$emailLabel}
            ${$emailInput}

            ${$usernameLabel}
            ${$usernameInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}

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