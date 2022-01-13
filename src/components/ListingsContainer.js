import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  function onDelete(id){
    handleDelete(id)
  }

  if (!listings){
    return (
      <h2>Listings Loading...</h2> 
    )
  }

  if (listings){
    return (
      <main>
        <ul className="cards">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>
          )
          )}
        </ul>
      </main>
    );
  }
  
}

export default ListingsContainer;
