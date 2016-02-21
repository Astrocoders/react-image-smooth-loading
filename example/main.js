(function(){
  var Img = React.createFactory(ReactImg.default);

  Img.globalPlaceholder =
    'astrocoders.github.io/react-image-smooth-loading/images/placeholder.png';

  var App = React.createClass({
    render(){
      var imgs = this._getImageList().map(function(url){
        return React.createElement('div', {
          style: { width: '20%', float: 'left', 'margin-left': '10px' },
        }, Img({ src: url, key: url}));
      });

      return React.createElement('div', {
        style: {height: '480px'}
      }, imgs);
    },

    _getImageList(){
      return [
        'http://lorempixel.com/480/480/sports',
        'http://lorempixel.com/480/480/animals',
        'http://lorempixel.com/480/480/people',
        'http://lorempixel.com/480/480/food',
      ];
    }
  });

  window.addEventListener('load', function(){
    ReactDOM.render(
      React.createElement(App, null), document.getElementById('app'));
  });
})(React, ReactDOM);
