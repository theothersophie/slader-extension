var elem1removed = false;
var elemParent = document.body; /* or whatever */


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
            var node1 = mutation.target.querySelector('section.Paywall__footer-counter');
            if (node1) {
                node1.parentNode.removeChild(node1);
                elem1removed = true;

            }

            if (elem1removed) {
                observer.disconnect();
            }
        }
    });
});


observer.observe(elemParent, {
    childList: true,
    subtree: true
});