import "../Components/ListItems.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItems(props) {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="list" key={"item.key"}>
        <p>
          {items.text}
          <input type="text" id={item.key} value={item.text} onChange={(e)=>{
            props.setUpdate(e.target.value,item.key)
          }}/>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listitems}</div>;
}

export default ListItems;
