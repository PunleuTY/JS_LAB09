import { useState } from "react";

export default function StuffForm({onAdd}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  const handleAddClick = () => {

    onAdd(name, price);
    setName("");
    setPrice(0);
  }
  
  return (
    <form className="stuff-form" onSubmit={(e) => {
      e.preventDefault();
      handleAddClick();
    }}>
      <p>Stuff name</p>
      <input type="text" placeholder="Banana" value={name} onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="number" placeholder="15" value={price} onChange={(e) => setPrice(Number(e.target.value))} /> 

      <button type="submit">Add Stuff</button>
    </form>
  );
}
