Scoped = function (Element) {
  return React.createClass({
    render: function () {
      return React.createElement(
        'div',
        { className: Scope(Element.displayName) },
        React.createElement(Element, this.props)
      );
    }
  });
};