const navbar = document.getElementsByClassName('navbar')[0];
navbar.classList.add('animate__animated', 'animate__backInUp');

const main_content = document.getElementsByClassName('icode-content')[0];
main_content.classList.add('animate__animated', 'animate__backInUp');

window.onscroll = function() {fix_nav()};

function fix_nav() {
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.classList.add("shadow");
        document.getElementById("features").classList.add("slideUp");
    }
    else {
        navbar.classList.remove("shadow");
        document.getElementById("features").classList.remove("slideUp");
    }
}