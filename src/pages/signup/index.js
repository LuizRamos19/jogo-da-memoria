const signup = (function(){
    const $root = document.querySelector('#root');
    
    const $flatButtonLogin = flatButton.render('Login');
    const $flatButtonSigup = flatButton.render('Sign up', true);
    const $logoCollab = logoCollab.render();
    const $titleCollab = titleCollab.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logoCollab, $titleCollab);
    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML('beforeend', $flatButtonLogin);
    $root.insertAdjacentHTML('beforeend', $flatButtonSigup);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $formSignup);
});