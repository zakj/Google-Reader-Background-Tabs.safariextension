document.addEventListener('keypress', function (event) {
    // Ignore keypresses on some common form elements.
    var tag = event.target.tagName;
    if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SELECT') {
        return;
    }

    // Catch 'v', but not ctrl-v or cmd-v.
    if (event.which === 118 && !event.ctrlKey && !event.metaKey) {
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
