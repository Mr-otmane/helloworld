// single selection
// multiple selection
import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId){

  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={handleSingleSelection} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>NO data foud</div>
        )}
      </div>
    </div>
  );
}
