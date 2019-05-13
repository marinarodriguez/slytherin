import React from "react";
import PropTypes from 'prop-types';

class Photo extends React.Component {
  render() {
    return (
          <div
            className="photo"
            style={{
              backgroundImage: `url(${this.props.dataPhoto})`
            }}
          />
    );
  }
}
Photo.propTypes = {
    dataPhoto: PropTypes.string.isRequired
  };

export default Photo;
