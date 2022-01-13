import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState()
  

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(r => setItems(r))
    
  }, [])

  function handleDelete(id){
    const newList = items.filter(item => item.id !== id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    setItems(newList)
  }

  function handleSubmit(input){
    const newListings = items.filter((item) => {
      return item.description.toUpperCase().includes(input.toUpperCase())
    })
    setItems(newListings)
  }

  
    


  console.log(items)

  return (
    <div className="app">
      <Header handleSubmit={handleSubmit}/>
      <ListingsContainer listings={items} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
