import React from "react";

function ToyCard({toy, onDeleteToy, onAddLikes}) {
  const {name, image, likes} = toy

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteToy(toy))
  }

  function handleAddLikes(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({likes: likes+1})
    })
    .then(r=>r.json())
    .then((data)=>onAddLikes(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleAddLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
