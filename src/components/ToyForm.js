import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  });

  function submitNewToy(e){
    e.preventDefault()
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(data=>{
      onAddToy(data)
      setFormData({
        name: "",
        image: "",
        likes: 0
      })
    })
  }

  function handleChange(e){
    const newToy = {...formData, [e.target.name]: e.target.value}
    setFormData(newToy)
    e.target.value = ''
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
