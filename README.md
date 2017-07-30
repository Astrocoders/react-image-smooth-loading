ReactImg
========
React component for making your site images appear in a fade in.
See a [demo](http://astrocoders.com/react-image-smooth-loading/).

# Install
```
yarn react-image-smooth-loading styled-components
```

# Usage

```js
import Img from 'react-image-smooth-loading'

// Define which placeholder to show while the image is loading
// Can be any image file.
// There's already a default one in base64, but you'd like to change ;)
Img.globalPlaceholder = '/images/placeholder.png'

export default function ImageList({ list }) {
  return (
    <div className="image-grid">
      {list.map(url => (
        <ImageItemWrapper>
          <Img src={url} />
          <p>My awesome image</p>
        </ImageItemWrapper>
      )}
    </div>
  )
}
```

Remember that Img is totally responsive, which means that it will fit accordingly
to the space given to it by its container.


## Options

```js
const props = {
  src: '...' // Image source,
  placeholder: '...' // Optional image placeholder, overrides globalPlaceholder,
  holderClasses: '...' // Img container class
  imgClasses: '...' // Classes for <img/> tags
}

<Img {...props} />>
```
