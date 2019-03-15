(function(){
    const $root = document.querySelector('#root');
    
    const $flatButtonLogin = flatButton.render('Login');
    const $flatButtonSigup = flatButton.render('Sign up', true);

    $root.insertAdjacentHTML('beforeend', $flatButtonLogin);
    $root.insertAdjacentHTML('beforeend', $flatButtonSigup);
})()