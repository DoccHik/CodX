$('.gallery__slider').slick({
    slidesToShow: 9, // толкьо 1 слайд показывать одновременно
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 5000, // медленная смена слайдов - скорость бегущей строки
    autoplay: true, // устанавливаем автозапуск слайдера
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    // cssEase: 'ease', // делаем анимацию однотонной при смене слайда
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    arrows: false,
});

// Табы

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function(itemTab) {

    itemTab.addEventListener('click', function() {

        contentBoxes.forEach(function(item) {
            item.classList.add('experts-tabs-content-hidden')
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        // console.log(contentBox);
        contentBox.classList.remove('experts-tabs-content-hidden');

    })
})


// Collection box 

// Находим бокс и кнопик которые будут открывать и закрывать бокс с категориями NFT
const collectionBox = document.querySelector('.collection__sub-items');
const collectionButton = document.querySelector('.collection__btn');

// Кнопке collectionButton добавляем событие клик
collectionButton.addEventListener('click', function() {
    // Боксу с катгорями добавляем класс .active (toggle)
    collectionBox.classList.toggle('active');


});


// Аккордеон 

// Находим все элементы аккордиона
const accordeones = document.querySelectorAll('.faq__accordeon-title');
// Находим все скрытые боки аккордеона
const accrodeonContent = document.querySelectorAll('.faq__accordeon-content');

// Пропускаем все item черз цикл for чтобы обратиться к конкретному элементу
for (let i = 0; i < accordeones.length; i++) {
    // Сохараняем элемент в переменную e
    const e = accordeones[i];

    // Элементу(переменной e) создаем событие клика
    e.addEventListener('click', function() {
        // Через this(item) задаем класс active
        this.classList.toggle('active');
        console.log(this.nextElementSibling);
        this.nextElementSibling.classList.toggle('faq__accordeon-content-hidden')
    });
};