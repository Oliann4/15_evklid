// burger
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLinks = nav.querySelectorAll ('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active');
  nav.classList.toggle('nav-active');
  document.body.classList.toggle('stop-scroll');
})

navLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger-active');
    nav.classList.remove('nav-active');
    document.body.classList.remove('stop-scroll');
  })
})

// search
let search = document.querySelector('.form-search');
let btnSearch = document.querySelector('.btn-search');
let btnSearchClose = document.querySelector('.form-search__btn-search-close');

btnSearch.addEventListener('click', function() {
  search.classList.toggle('form-search--active');
})
btnSearchClose.addEventListener('click', function() {
  search.classList.remove('form-search--active');
})


// tabs
let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('how__btn-active')});
    e.currentTarget.classList.add('how__btn-active');

    tabsItem.forEach(function(item) {
      item.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// accordion
$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
});
