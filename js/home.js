const switchToAboutPage = () => {
    window.parent.postMessage('switchToAboutPage', '*');
    console.log('post msg')
}

