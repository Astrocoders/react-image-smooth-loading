(function(){
  var Img = React.createFactory(ReactImg.default);

  var App = React.createClass({
    render(){
      return React.createElement('div', {
        style: {width: '480px', height: '480px'}
      }, Img({src: '/images/patriota.jpg'}));
    },
  });

  window.addEventListener('load', function(){
    ReactDOM.render(
      React.createElement(App, null), document.getElementById('app'));
  });
})(React, ReactDOM);
