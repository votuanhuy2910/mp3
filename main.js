let menu = document.querySelector('.fa-bars');
let sidebar = document.querySelector('.sidebar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    sidebar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    sidebar.classList.remove('active');
}

let moon = document.querySelector('.fa-moon');

moon.onclick = () => {
    moon.classList.toggle('fa-sun');
    if (moon.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}