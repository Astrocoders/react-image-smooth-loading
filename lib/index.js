import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const imagesStyle = css`
  position absolute
  top 0
  left 0
  width 100%
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`

const ImgPlaceholder = styled.img`
  ${imagesStyle};
  opacity: ${props => props.deactivated ? 0 : 1};
  z-index: 1;
  transition: opacity .6s ease-in;
`

const ImgFinal = styled.img`
  ${imagesStyle};
  z-index: 0;
`

class Img extends React.PureComponent {
  state = {
    loaded: false,
  }

  setLoaded = loaded => this.set({ loaded })

  render() {
    const {
      placeholder,
      placeholderProps = {},
      imageProps = {},
      src,
      alt,
      ...props
    } = this.props

    return (
      <Wrapper {...props}>
        <ImgFinal src={src} alt={alt} {...imageProps} onLoad={() => this.setLoaded(true)} />
        <ImgPlaceholder src={placeholder || Img.globalPlaceholder} alt={alt} deactivated={this.state.loaded}/>
      </Wrapper>
    )
  }
}

Img.globalPlaceholder =
  'data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEXu7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8jfsX5AAABr0lEQVR42u3a7W6DIBSA4YGK4Ce9/5td2jULBZxpp3Cavs9/0zfGAj326wsAAAAAAAAAAAAAAACQrTtNc3Tq5TQzqaSSSupHp/bqKObsVHPc/kcqqaT+J7V1o+veIVXPt0uXRnyq9vdrfSM9dfrdmBbhqU2wiXayU/sg1clOtUHqWDVV7V1pxNzVce8+6yC1rZna7j8TY/5oWjx1jr7XGWq5X7vqmqm3z/PtTuvPfZ101d1qyWxDuefV2F7XPQP02S1T4slKrZfsYygwNVjdk1alJKUqHyyZS5Rm92500VT3+HteRSe/nYWhZKr2l+3W6/rkOympYzwnmR42sduAQ0Zqk850xodN7GoQkTpl5k9DcpqaVP3UNjsrc9F6G3/bqqTO+bmeTZaGrUWrWKrZmkH2ydKwsWgVS10356UmWRq8qZna/zHbdRuPRZ1UtT45mh6qpdqnx+jpolUmVfnnR/5LnaO1feX1xNq8TWp8epGcGp1eZKdWmK68nBoOraSnBqeXMqmtfV3HGxZSSY1SB3MUx18XSCWV1I9OnU4z8OdgAAAAAAAAAAAAAAAA4DDf4ajaTwZkqlYAAAAASUVORK5CYII='

Img.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  imgClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  holderClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholderProps: PropTypes.object,
  onClick: PropTypes.func,
  alt: PropTypes.string,
}

export default Img
