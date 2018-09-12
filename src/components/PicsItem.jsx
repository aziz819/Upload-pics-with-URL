import React from "react";

function PicsItem(props) {
  const theAll =
    props.name !== "" && props.url !== "" ? (
      <li>
        {props.name}
        <p>
          <img src={props.url} width="100" />
        </p>
      </li>
    ) : (
      <p />
    );
  console.log(props.name + props.url);
  return <React.Fragment>{theAll}</React.Fragment>;
}
export default PicsItem;
