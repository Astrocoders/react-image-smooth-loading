ReactImg
========
React component for making your site images appear in a fade in.
See a [demo](http://astrocoders.com/react-image-smooth-loading/).

# Install
```
yarn add react-image-smooth-loading
```
_Note_: styled-components, react and react-dom were added as peer dependencies.
If you don't have then you must install them as well.
```
yarn add react-image-smooth-loading styled-components react react-dom
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
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string, // Optional image placeholder, overrides globalPlaceholder,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  holderClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholderProps: PropTypes.object,
  onClick: PropTypes.func,
  alt: PropTypes.string,
}

<Img {...props} />>
```
