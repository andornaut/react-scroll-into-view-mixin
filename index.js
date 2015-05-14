function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= window.innerHeight
        && rect.right <= window.innerWidth);
}

module.exports = function(el, shouldScrollUp, shouldScrollDown) {
    return {
        componentDidUpdate: function(prevProps, prevState) {
            var target = typeof(el) === 'function' ? el.call(this) : el;

            if (target && !isInViewport(target)) {
                if (shouldScrollUp.call(this, target, prevProps, prevState)) {
                    target.scrollIntoView(true);
                } else if (shouldScrollDown.call(this, target, prevProps, prevState)) {
                    target.scrollIntoView(false);
                }
            }
        }
    };
};

