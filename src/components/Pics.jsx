import React, { Component } from "react";
import PicsInput from "./PicsInput";
import PicsList from "./PicsList";

class Pics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        {
          name: "",
          url: "",
          id: 0
        }
      ],
      uniqueID: 0
    };

    this.addPic = this.addPic.bind(this);
    this.resetPic = this.resetPic.bind(this);
  }

  addPic(name, url) {
    const { pics, uniqueID } = this.state;

    const pic = { name, url, id: uniqueID + this.state.pics.length };

    const newPics = pics.concat(pic);
    this.setState({ pics: newPics });
  }

  resetPic() {
    this.setState({ pics: [] });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <PicsInput addPic={this.addPic} resetPic={this.resetPic} />
        <PicsList pics={this.state.pics} />
      </div>
    );
  }
}

export default Pics;
