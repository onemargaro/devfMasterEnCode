import { Component } from "react";

class ImageCard extends Component {
  render() {
    return <img src={this.props.url} width="150px" alt="img-card" />;
  }
}

export default ImageCard;
