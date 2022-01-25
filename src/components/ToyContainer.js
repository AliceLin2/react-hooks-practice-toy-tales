import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, onDeleteToy, onAddLikes}) {
  return (
    <div id="toy-collection">{toyList.map(toy=><ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onAddLikes={onAddLikes}/>)}</div>
  );
}

export default ToyContainer;
