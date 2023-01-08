let header__langSwith = document.querySelectorAll('.header__lang-swith');
let activeLang = 'eng';

header__langSwith.forEach(element => 
    element.addEventListener('click', () => {
        if (activeLang === 'eng') {
            swithLangOnRu();
            return activeLang = 'ru';
        } else if (activeLang === 'ru') {
            swithLangOnEng();
            return activeLang = 'eng';
        };
    })
);

function swithLangOnRu() {
    let textOnRu = document.querySelectorAll('.text-ru');
    let textOnRuBtn = document.querySelectorAll('.header__lang-ru');
    let textOnEng = document.querySelectorAll('.text-eng');
    let textOnEngBtn = document.querySelectorAll('.header__lang-eng');

    textOnRuBtn.forEach(element => element.classList.add('header__lang_selected'));
    textOnEngBtn.forEach(element => element.classList.remove('header__lang_selected'));   

    textOnEng.forEach(element => element.style.display = 'none');
    textOnRu.forEach(element => element.style.display = 'inline');

    enlargeContactsButton();
};

function swithLangOnEng() {
    let textOnRu = document.querySelectorAll('.text-ru');
    let textOnRuBtn = document.querySelectorAll('.header__lang-ru');
    let textOnEng = document.querySelectorAll('.text-eng');
    let textOnEngBtn = document.querySelectorAll('.header__lang-eng');

    textOnEngBtn.forEach(element => element.classList.add('header__lang_selected'));
    textOnRuBtn.forEach(element => element.classList.remove('header__lang_selected'));   
 
    textOnRu.forEach(element => element.style.display = 'none');
    textOnEng.forEach(element => element.style.display = 'inline'); 

    reducingContactsButton();
};

function enlargeContactsButton () {
    let contacts__btn = document.querySelector('.contacts__btn');
    contacts__btn.style.width = "200px";
    contacts__btn.style.height = "50px";    
};
function reducingContactsButton () {
    let contacts__btn = document.querySelector('.contacts__btn');
    contacts__btn.style.width = "180px";
    contacts__btn.style.height = "42px";    
};
