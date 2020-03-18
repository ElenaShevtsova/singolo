let headerMenu = document.getElementById('header-menu'),
    slider = document.getElementById('slider'),
    rightBtn = document.getElementById('right-button'),
    leftBtn = document.getElementById('left-button'),
    secondSlide = document.getElementById('second-slide'),
    firstImgBtn = document.getElementsByClassName('first-img_button')[0],
    firstImgSecondBtn = document.getElementsByClassName('first-img_second-button')[0],
    firstImgSecondLayer = document.getElementsByClassName('first-img_second-layer')[0],
    secondImgBtn = document.getElementsByClassName('second-img_button')[0],
    secondImgSecondBtn = document.getElementsByClassName('second-img_second-button')[0],
    secondImgSecondLayer = document.getElementsByClassName('second-img_second-layer')[0],
    portfolioButtons = document.getElementsByClassName('portfolio-buttons')[0],
    imagesBlock = document.getElementsByClassName('images-block')[0],
    submitBtn = document.getElementById('submit-button'),
    sliderBlock = document.getElementsByClassName('slider-block')[0],
    subject = document.getElementsByClassName('subject')[0],
    messageInformation = document.getElementsByClassName('message-information')[0],
    parentBlock = document.getElementById('parent-block');


headerMenu.addEventListener('click', (event) => {
    headerMenu.querySelectorAll('a').forEach(el => el.classList.remove('header-active'));
    event.target.classList.add('header-active');
});

document.addEventListener('scroll', onScroll);

function onScroll(event){
    const curPos = window.scrollY;
    let home = document.getElementById('home');
    let services = document.getElementById('services');
    let portfolio = document.getElementById('portfolio');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    let array = [home,services, portfolio, about, contact];
    array.forEach((el)=>{
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) < curPos) {
            
         document.querySelectorAll('#header-menu a').forEach((a)=>{
            a.classList.remove('header-active');
            if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add('header-active');
            }
         })
        }
    })
}

rightBtn.addEventListener('click', () => {
    slider.classList.toggle('position');
    sliderBlock.classList.toggle('slider-block');
    sliderBlock.classList.toggle('second-slide-bg');
    secondSlide.classList.toggle('display-block');
})

leftBtn.addEventListener('click', () => {
    slider.classList.toggle('position');
    sliderBlock.classList.toggle('slider-block');
    sliderBlock.classList.toggle('second-slide-bg');
    secondSlide.classList.toggle('display-block');
})

function changeBg() {
    firstImgSecondLayer.classList.toggle('black-bg');
}

function changeSecondBg() {
    secondImgSecondLayer.classList.toggle('black-bg');
}

firstImgBtn.addEventListener('click', () => {
    changeBg();
})

firstImgSecondBtn.addEventListener('click', () => {
    changeBg();
})

secondImgBtn.addEventListener('click', () => {
    changeSecondBg()
})

secondImgSecondBtn.addEventListener('click', () => {
    changeSecondBg()
});

portfolioButtons.addEventListener('click', (event) => {
    portfolioButtons.querySelectorAll('button').forEach(el => el.classList.remove('portfolio-buttons-active'));
    event.target.classList.add('portfolio-buttons-active');
})

imagesBlock.addEventListener('click', (event) => {

    imagesBlock.querySelectorAll('div').forEach((el) => {
        el.classList.remove('images-block-border');
        if (event.target === el) {
            event.target.classList.add('images-block-border');
        }
    })
})

function sortPortfolioImages() {
    let portfolioImages = document.querySelector('.images-block');
    let arrayPortfolioImages = Array.from(portfolioImages.getElementsByClassName('portfolio-image-block'));
    let newArrPortfolioImages = arrayPortfolioImages.sort(() => Math.random() - 0.5);
    portfolioImages.innerHTML = '';
    newArrPortfolioImages.forEach(el => portfolioImages.append(el));
}

submitBtn.addEventListener('click', () => {
    let inputSubject = document.getElementById('input-subject').value;
    let inputDescribe = document.getElementById('input-describe').value;
    document.getElementsByClassName('send-letter')[0].innerHTML = 'Письмо отправлено';
    if (inputSubject === '' && inputDescribe === '') {
        subject.innerHTML = `Без темы`;
        document.getElementsByClassName('describe')[0].innerHTML = `Без описания`;
    } else if (inputDescribe === '' && inputSubject !== '') {
        document.getElementsByClassName('describe')[0].innerHTML = `Без описания`;
        subject.innerHTML = `Тема: ${inputSubject}`;
    } else if(inputDescribe !== '' && inputSubject === ''){
        subject.innerHTML = `Без темы`;
        document.getElementsByClassName('describe')[0].innerHTML = `Описание: ${inputDescribe}`;
    } else {
        subject.innerHTML = `Тема: ${inputSubject}`;
        document.getElementsByClassName('describe')[0].innerHTML = `Описание: ${inputDescribe}`;
    }
    parentBlock.classList.toggle('parent-block');
    messageInformation.classList.toggle('display-none');

})

document.getElementsByClassName('agree-button')[0].addEventListener('click', () => {
    parentBlock.classList.toggle('display-none');
})