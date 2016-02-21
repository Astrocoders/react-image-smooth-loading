import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './styles.css';

const Img = React.createClass({
  statics: {
    globalPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAANlBMVEXu7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8jfsX5AAABr0lEQVR42u3a7W6DIBSA4YGK4Ce9/5td2jULBZxpp3Cavs9/0zfGAj326wsAAAAAAAAAAAAAAACQrTtNc3Tq5TQzqaSSSupHp/bqKObsVHPc/kcqqaT+J7V1o+veIVXPt0uXRnyq9vdrfSM9dfrdmBbhqU2wiXayU/sg1clOtUHqWDVV7V1pxNzVce8+6yC1rZna7j8TY/5oWjx1jr7XGWq5X7vqmqm3z/PtTuvPfZ101d1qyWxDuefV2F7XPQP02S1T4slKrZfsYygwNVjdk1alJKUqHyyZS5Rm92500VT3+HteRSe/nYWhZKr2l+3W6/rkOympYzwnmR42sduAQ0Zqk850xodN7GoQkTpl5k9DcpqaVP3UNjsrc9F6G3/bqqTO+bmeTZaGrUWrWKrZmkH2ydKwsWgVS10356UmWRq8qZna/zHbdRuPRZ1UtT45mh6qpdqnx+jpolUmVfnnR/5LnaO1feX1xNq8TWp8epGcGp1eZKdWmK68nBoOraSnBqeXMqmtfV3HGxZSSY1SB3MUx18XSCWV1I9OnU4z8OdgAAAAAAAAAAAAAAAA4DDf4ajaTwZkqlYAAAAASUVORK5CYII=',
  },

  propTypes: {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    imgClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    holderClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  },

  componentDidMount(){
    const holder = ReactDOM.findDOMNode(this);

    holder.querySelector(`.${styles['intended']}`)
    .addEventListener('load', () => {
      holder.querySelector(`.${styles['placeholder']}`)
        .classList.add(styles['deactivated']);
    });
  },

  render(){
    return (
      <div
        className={classNames(styles['image-holder'], this.props.holderClasses)}
      >
        <img
            className={classNames(styles['intended'], this.props.imgClasses)}
            src={this.props.src}
        />
        <img
            className={classNames(styles['placeholder'], this.props.imgClasses)}
            src={this.props.placeholder || Img.globalPlaceholder}
        />
      </div>
    );
  }
});

export default Img;
