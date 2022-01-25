import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(data=>setToyList(data))
  }, [])

  function handleAddToy(newToy){
    const newToyList = [...toyList, newToy]
    setToyList(newToyList)
  }

  function handleDeleteToy(deleteToy){
    const newToyList = toyList.filter((toy)=>{
      return toy.id!==deleteToy.id
    })
    setToyList(newToyList)
  }

  function handleAddLikes(addLikeToy){
    const newToyList = toyList.map((toy)=>{
      if(toy.id===addLikeToy.id){
        return addLikeToy
      }else{
        return toy
      }
    })
    setToyList(newToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={handleDeleteToy} onAddLikes={handleAddLikes}/>
    </>
  );
}

export default App;
