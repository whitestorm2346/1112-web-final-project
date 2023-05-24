const open_menu_btn = document.querySelector('#open-menu');
const close_menu_btn = document.querySelector('#close-menu');
const menu = document.querySelector('#menu');

open_menu_btn.addEventListener('click', () => {
    menu.classList.add('show-menu');
    close_menu_btn.classList.remove('hide-btn');
    open_menu_btn.classList.add('hide-btn');
});

close_menu_btn.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    open_menu_btn.classList.remove('hide-btn');
    close_menu_btn.classList.add('hide-btn');
});