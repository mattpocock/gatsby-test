import React from 'react';
import PropTypes from 'prop-types';

class AsyncLoadInlineImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      shouldAsyncLoad: !this.checkIfImageIsLoaded(),
    };
  }

  componentDidMount() {
    const { src } = this.props;
    if (!this.checkIfImageIsLoaded()) {
      this.img = new Image();
      this.img.onload = () => {
        this.setState({ hasLoaded: true });
      };
      this.img.src = src;
    }
  }

  checkIfImageIsLoaded = () => {
    const { src } = this.props;
    const image = new Image();
    image.src = src;
    return image.complete;
  };

  /* eslint-disable jsx-a11y/alt-text */
  render() {
    const { hasLoaded, shouldAsyncLoad } = this.state;
    if (!shouldAsyncLoad) {
      return <img {...this.props} />;
    }
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
