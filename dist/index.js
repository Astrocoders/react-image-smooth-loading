'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = _react2.default.createClass({
  displayName: 'Img',

  propTypes: {
    src: _react.PropTypes.string.isRequired,
    imgClasses: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    holderClasses: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
  },

  componentDidMount: function componentDidMount() {
    var holder = _reactDom2.default.findDOMNode(this);

    holder.querySelector('.' + _styles2.default['intended']).addEventListener('load', function () {
      holder.querySelector('.' + _styles2.default['placeholder']).classList.add(_styles2.default['deactivated']);
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(_styles2.default['image-holder'], this.props.holderClasses)
      },
      _react2.default.createElement('img', {
        className: (0, _classnames2.default)(_styles2.default['intended'], this.props.imgClasses),
        src: this.props.src
      }),
      _react2.default.createElement('img', {
        className: (0, _classnames2.default)(_styles2.default['placeholder'], this.props.imgClasses),
        src: '/images/placeholder.png'
      })
    );
  }
});

exports.default = Img;