function messageHandler(event) {
    if (event.name === 'openBackgroundTab') {
        var tab = safari.application.activeBrowserWindow.openTab('background');
        tab.url = event.message;
    }
}


safari.application.addEventListener('message', messageHandler, false);
