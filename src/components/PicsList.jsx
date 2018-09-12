import React, { Component } from "react";
import PicsItem from "./PicsItem";

class PicsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.pics.map(todo => {
      return <PicsItem {...todo} key={todo.id} />;
    });
    return <ul>{list}</ul>;
  }
}

export default PicsList;
