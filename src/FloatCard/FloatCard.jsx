import React from 'react';
import './FloatCard.css'

function FloatCard() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Front Image"
          />
        </div>
        <div className="card-back">
          <p>Shoe</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            turpis nec risus viverra ullamcorper.
          </p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}

export default FloatCard;
