import React from "react";
import Photo from "./Photo";
import Name from "./Name";
import PropTypes from "prop-types";

class Character extends React.Component {
  render() {
    return (
      <a
        target="blank"
        href={`https://harrypotter.fandom.com/es/wiki/${this.props.data.name}`}
      >
        {" "}
        <li className="itemList">
          <Name dataName={this.props} />
          <Photo dataPhoto={this.props.data.image} />
        </li>
      </a>
    );
  }
}
Character.propTypes = {
  dataName: PropTypes.object.isRequired
};

export default Character;
