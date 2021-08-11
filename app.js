
// ....header-mobile........

var iconMenu= document.querySelector(".nav-mobie-icon");
    iconMenu.addEventListener("click", menuToggle)

var navLinks= document.querySelectorAll(".nav-item_link")
    navLinks.forEach((link)=>{
        link.addEventListener("click",function(){
            const toggleMenu=document.querySelector(".nav-category");

            toggleMenu.style.display="none";
            
        })
    })
    function menuToggle(){
        const toggleMenu=document.querySelector(".nav-category");
        toggleMenu.classList.toggle('active');
    }   



    // ......................header scroll........................
var header = document.querySelector('.app-header ')
var slider = document.querySelector('.app-container__slider')
var heightSlider = slider.clientHeight;
window.onscroll = function () {
    if (document.body.scrollTop > (heightSlider - 90) || document.documentElement.scrollTop > (heightSlider - 90)) {
        header.style.backgroundColor = '#2b3a4c';
        header.style.opacity = '1'

    }
    else {
        header.style.backgroundColor = '';

    }
}

// .....................%  bonus auto...................

// hàm couter 
//selector : vị trí class mình cần selector để chạy số
// start: vị trí bắt đầu
// end : vị trí kết thúc
function counter(selector, start, end) {
    var count = start;
    var project = setInterval(function () {
        count++;
        document.querySelector(`#${selector}`).innerText = count+'%';
        if (count == end) {
            clearInterval(project);
        }
    }, 80)
}

var spacePercent = document.querySelector('.a');
// điểm cần đo đến top
var distancePercent =spacePercent.getBoundingClientRect().top + window.scrollY;
// console.log(distanceFromTop);
var percentScroll = function () {
    if (document.body.scrollTop >distancePercent || document.documentElement.scrollTop > distancePercent) {
        // gọi hàm và truyền tham số
        counter('percent-1', -5, 10);
        counter('percent-2', 0, 15);
        counter('percent-3', 10, 25);
        counter('percent-4', 20, 35);
        window.removeEventListener('scroll', percentScroll);
    }
}
window.addEventListener('scroll', percentScroll);

// .........................service our scroll........................
var spaceAbout = document.querySelector('.app-container__app-content-btn ')
var secviceList = document.querySelector('.app-container__services-list')
var distanceService = spaceAbout.getBoundingClientRect().top + window.scrollY; //xem khoảng cách từ element đến top

var secviceTransf = function () {
    if (document.body.scrollTop > distanceService || document.documentElement.scrollTop > distanceService) {
        secviceList.classList.add('active-service')
        secviceList.classList.remove('none--opacity');
    }
}
window.addEventListener('scroll', secviceTransf);


// .........................service step scroll........................
var spaceStep = document.querySelector('.app-container__services-item-img')
var stepList = document.querySelector('.app-container__step-content')
var distanceStep = spaceStep.getBoundingClientRect().top + window.scrollY; //xem khoảng cách từ element đến top

var stepTransf = function () {
    if (document.body.scrollTop > distanceStep || document.documentElement.scrollTop > distanceStep) {
        stepList.classList.add('active--step');
        stepList.classList.remove('none--opacity');
    }
}
window.addEventListener('scroll', stepTransf);


// ...............slider..............
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var sliders = $$('.app-container__slider');
var badges = $$('.badge');
badges.forEach((badge, index) => {
    const slider = sliders[index];
    badge.onclick = function () {
        var badgeActive = $('.badge.active')
        var sliderActive = $('.app-container__slider.active')
        sliderActive.classList.remove('active');
        slider.classList.add('active');
        badgeActive.classList.remove('active');
        badge.classList.add('active');
    }
})
// ...............peolpe slider................
var myIndex = 0;
carousel();

function carousel() {

    var x = document.getElementsByClassName("app-container__what-item");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";

    setTimeout(carousel, 2500); // Change image every 2.5 seconds
}

// ........scroll nav............
const navItems = document.querySelectorAll('.header__navbar-item-link');
 const sections = document.querySelectorAll('.section');
 window.addEventListener( 'scroll',function () {
    sections.forEach((section) => {
        //lấy khoảng cách từng section so với top
      //bỏ đi 50px là do thanh Nav có height là 50px
        const top = section.offsetTop - 70;
        const height = section.offsetHeight;
          
        navItems.forEach((navItem) => {
            const hrefNav = navItem.href.match(/#[a-zA-Z]+/)[0];//lấy href của nav-item
            const idSection = '#' + section.id;//lấy id của section
            if (document.documentElement.scrollTop >= top && top + height >= document.documentElement.scrollTop) {
                hrefNav === idSection
                    ? navItem.parentElement.classList.add('active')
                    : navItem.parentElement.classList.remove('active');
            } else {
                hrefNav === idSection &&
                    navItem.parentElement.classList.remove('active');
            }
        });
    });
},
{ passive: true }
);


// ...............slider-video................
function videoUrl(hmmm){
    document.getElementById('slider_video').src=hmmm;
}