document.addEventListener('keypress', function (event) {
    if (event.which === 118 && !event.ctrlKey && !event.metaKey) {  // 118: 'v'
        var current = document.getElementById('current-entry');
        if (current === null) {
            return;
        }
        var url = current.getElementsByTagName('a')[0].getAttribute('href');
        event.stopPropagation();
        event.preventDefault();
        safari.self.tab.dispatchMessage('openBackgroundTab', url);
    }
}, true);
