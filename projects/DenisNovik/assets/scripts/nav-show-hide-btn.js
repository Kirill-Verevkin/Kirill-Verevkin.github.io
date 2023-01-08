let showBtn = document.querySelector('.header__nav-btn-show');
let hideBtn = document.querySelector('.header__nav-btn-hide');

showBtn.addEventListener('click', () => {
    showNavigation()
});
hideBtn.addEventListener('click', () => {
    hideNavigation()
});

function showNavigation() {
    let navigation = document.querySelectorAll('.header__nav-block');
    navigation.forEach(element => element.style.display = "flex");
    showBtn.style.display = "none";
};
function hideNavigation() {
    let navigation = document.querySelectorAll('.header__nav-block');
    navigation.forEach(element => element.style.display = "none");
    showBtn.style.display = "block";
};