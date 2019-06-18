const login = (function(){
    const $root = document.querySelector("#root");

    const $flatButtonLogin = flatButton.render('Login', true, 'login');
    const $flatButtonSigup = flatButton.render('Sign up', false, 'signup');
    const $logoCollab = logoCollab.render();
    const $titleCollab = titleCollab.render("Hello!");
    const $logoWrapper = logoWrapper.render($logoCollab, $titleCollab);
    const $formLogin = formLogin.render();

    $root.insertAdjacentHTML('beforeend', $flatButtonLogin);
    $root.insertAdjacentHTML('beforeend', $flatButtonSigup);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $formLogin);
});