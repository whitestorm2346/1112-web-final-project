window.addEventListener('message', handleMessage, false);

const handleMessage = (event) => {
    if(event.source !== document.querySelector('.main-frame').contentWindow) {
        return;
    }

    if (event.data === 'buttonClicked') {
        show_page(2);
    }
}