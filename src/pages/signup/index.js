(function(){
    const $root = document.querySelector('#root');
    
    const $flatButtonLogin = flatButton.render({classButton: 'flat-button', className: 'Login'});
    const $flatButtonSigup = flatButton.render({classButton: 'flat-button -sigup', className: 'Sig up'});

    $root.insertAdjacentHTML('beforeend', $flatButtonLogin);
    $root.insertAdjacentHTML('beforeend', $flatButtonSigup);
})()