ReactImg
========
React component for making your site images appear in a fade in.
See a [demo](http://astrocoders.com/react-image-smooth-loading/).

# Usage

```js
import Img from 'react-image-smooth-loading';

// Define which placeholder to show while the image is loading
// Can be any image file.
// There's already a default one in base64, but you'd like to change ;)
Img.globalPlaceholder = '/images/placeholder.png';

const Container = React.createClass({
  render(){
    <div className="image-grid">
      {this._getImageList.map(url => {
        return (
          <div className="image-card">
            <Img src={url}/>
            <p>My awesome image</p>
          </div>
        );
      })}
    </div>
  },

  _getImageList(){
    return [
      ...
    ];
  }
});
```

Remember that Img is totally responsive, which means that it will fit accordingly
to the space given to it by its container.


## Options

```js
const settings = {
  src: '...' // Image source,
  placeholder: '...' // Optional image placeholder, overrides globalPlaceholder,
  holderClasses: '...' // Img container class
  imgClasses: '...' // Classes for <img/> tags
};
```
