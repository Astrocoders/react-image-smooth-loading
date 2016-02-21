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

  statics: {
    globalPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEXu7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8jfsX5AAABr0lEQVR42u3a7W6DIBSA4YGK4Ce9/5td2jULBZxpp3Cavs9/0zfGAj326wsAAAAAAAAAAAAAAACQrTtNc3Tq5TQzqaSSSupHp/bqKObsVHPc/kcqqaT+J7V1o+veIVXPt0uXRnyq9vdrfSM9dfrdmBbhqU2wiXayU/sg1clOtUHqWDVV7V1pxNzVce8+6yC1rZna7j8TY/5oWjx1jr7XGWq5X7vqmqm3z/PtTuvPfZ101d1qyWxDuefV2F7XPQP02S1T4slKrZfsYygwNVjdk1alJKUqHyyZS5Rm92500VT3+HteRSe/nYWhZKr2l+3W6/rkOympYzwnmR42sduAQ0Zqk850xodN7GoQkTpl5k9DcpqaVP3UNjsrc9F6G3/bqqTO+bmeTZaGrUWrWKrZmkH2ydKwsWgVS10356UmWRq8qZna/zHbdRuPRZ1UtT45mh6qpdqnx+jpolUmVfnnR/5LnaO1feX1xNq8TWp8epGcGp1eZKdWmK68nBoOraSnBqeXMqmtfV3HGxZSSY1SB3MUx18XSCWV1I9OnU4z8OdgAAAAAAAAAAAAAAAA4DDf4ajaTwZkqlYAAAAASUVORK5CYII='
  },

  propTypes: {
    src: _react.PropTypes.string.isRequired,
    placeholder: _react.PropTypes.string,
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
        src: this.props.placeholder || Img.globalPlaceholder
      })
    );
  }
});

exports.default = Img;