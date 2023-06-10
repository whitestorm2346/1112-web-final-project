const show_page = (index) => {
    const frame = document.querySelector('.main-frame')

    switch(index){
        case 1:
            frame.innerHTML = `<iframe src="/home.html" frameborder="0"></iframe>`;
            break;
        case 2:
            frame.innerHTML = `<iframe src="/about.html" frameborder="0"></iframe>`;
            break;
        case 3:
            frame.innerHTML = `<iframe src="/teachers.html" frameborder="0"></iframe>`;
            break;
        case 4:
            frame.innerHTML = `<iframe src="/contact.html" frameborder="0"></iframe>`;
            break;
    }

    const open_menu_btn = document.querySelector('#open-menu');
    const close_menu_btn = document.querySelector('#close-menu');
    const menu = document.querySelector('#menu');

    menu.classList.remove('show-menu');
    open_menu_btn.classList.remove('hide-btn');
    close_menu_btn.classList.add('hide-btn');
}

window.addEventListener("message", (event) => {
    if (event.data === "switchToAboutPage") {
        const frame = document.querySelector('.main-frame')

        frame.innerHTML = `<iframe src="/about.html" frameborder="0"></iframe>`;
        console.log('go through')
    }
  });