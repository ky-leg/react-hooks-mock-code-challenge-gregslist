import React, {useState} from "react";

function ListingCard({listing, onDelete}) {

  const [favOn, setFavOn] = useState(false)

  function onFav(){
    setFavOn(!favOn)
  }

  function onDel(){
    onDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favOn ? (
          <button onClick={onFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={onDel} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
