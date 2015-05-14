react-scroll-into-view-mixin
====================================

A [ReactJS][react] mixin that enables components to scroll HTML elements into view.

## Install

```
npm install react-scroll-into-view-mixin --save
```

## Example

```
var ScrollIntoViewMixin = require('react-scroll-into-view-mixin');

function getSelected() {
    return this.getDOMNode().querySelector('.is-selected');
}

function shouldScrollUp(el, prevProps, prevState) {
    return this.props.selectedIndex < prevProps.selectedIndex;
}

function shouldScrollDown(el, prevProps, prevState) {
    return this.props.selectedIndex > prevProps.selectedIndex;
}

module.exports = React.createClass({
    mixins: [
        ScrollIntoViewMixin(getSelected, shouldScrollUp, shouldScrollDown)
    ]
}

```

## Contributing

Contributions of any sort are welcome.

## License

[MIT][license].

[license]: /LICENSE
[react]: https://facebook.github.io/react/