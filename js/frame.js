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
}