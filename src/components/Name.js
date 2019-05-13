import React from "react";
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    return (
          <h2
            className="nameList"
            style={{
              backgroundColor:`${this.props.dataName.styling}`
            }}
          >
            {this.props.dataName.data.name}
          </h2>
    );
  }
}

Name.propTypes = {
    dataName: PropTypes.object.isRequired
  };

export default Name;
