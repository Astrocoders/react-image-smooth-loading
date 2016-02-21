import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './styles.css';

const Img = React.createClass({
  propTypes: {
    src: PropTypes.string.isRequired,
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
            src="/images/placeholder.png"
        />
      </div>
    );
  }
});

export default Img;
