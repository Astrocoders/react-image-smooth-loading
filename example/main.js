(function(){
  var Img = React.createFactory(ReactImg.default);

  var App = React.createClass({
    render(){
      return React.createElement('div', {
        style: {width: '480px', height: '480px'}
      }, Img({src: 'http://astrocoders.com/react-image-smooth-loading/images/patriota.jpg'}));
    },
  });

  window.addEventListener('load', function(){
    ReactDOM.render(
      React.createElement(App, null), document.getElementById('app'));
  });
})(React, ReactDOM);
