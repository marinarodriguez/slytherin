import React from "react";


class SearchButton extends React.Component {
    
  render() {
    return (
            <button onClick={this.props.onClick} className='btn'>{this.props.label}</button>
    );
  }
}

export default SearchButton;
