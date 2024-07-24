let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links,classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ '] ').classList,add('active');
            })
        }

    });
}
menuIcon.onclik =() => {
    menuIcon.classList.toggle('nx-x');
    navbar.classList.toggle('active');
    
}