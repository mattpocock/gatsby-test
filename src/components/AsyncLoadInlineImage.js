import React from 'react';
import PropTypes from 'prop-types';

class AsyncLoadInlineImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
    };
  }

  componentDidMount() {
    const { src } = this.props;
    this.img = new Image();
    this.img.onload = () => {
      this.setState({ hasLoaded: true });
    };
    this.img.src = src;
    if (this.img.complete) {
      this.setState({ hasLoaded: true });
    }
  }

  /* eslint-disable jsx-a11y/alt-text */
  render() {
    const { hasLoaded } = this.state;
    return (
      <img
        {...this.props}
        style={{
          opacity: hasLoaded ? 1 : 0,
          transition: '0.75s all',
          backgroundColor: '#fafafa',
        }}
      />
    );
  }
}

AsyncLoadInlineImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AsyncLoadInlineImage;
