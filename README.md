ReactImg
========
React component for making your site images appear in a fade in.
See a [demo](http://astrocoders.com/react-image-smooth-loading/).

# Usage

```js
import Img from 'react-image-smooth-loading';

// Define which placeholder to show while the image is loading
// Can be any image file.
Img.placeholder = '/images/placeholder.png';

const Container = React.createClass({
  render(){
    <div className="image-grid">
      {this._getImageList.map(url => <Img src={url}/>)}
    </div>
  },

  _getImageList(){
    return [
      ...
    ];
  }
});
```
