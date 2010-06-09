// Safari extension whitelist wildcards are very limited, and Google uses many
// international domains.  To work around the problem, we allow any domain in
// the extension whitelist, and check for a Google-like domain here.  The
// Reader path itself is still managed by the extension whitelist.  False
// positives shouldn't cause too much trouble.
if (document.location.host.indexOf('.google.') !== -1) {
    document.addEventListener('keypress', function (event) {
        // Ignore keypresses on some common form elements.
        var tag = event.target.tagName;
        if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SELECT') {
            return;
        }

        // Catch 'v', but not ctrl-v or cmd-v.
        if (event.which === 118 && !event.ctrlKey && !event.metaKey) {
            var current = document.getElementById('current-entry');
            if (!current) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            safari.self.tab.dispatchMessage('openBackgroundTab',
                current.getElementsByTagName('a')[0].getAttribute('href'));
        }
    }, true);
}
