import React from 'react';


function Card(props) {
  const handleFullScreenClick = () => {
    props.handleFullScreen(); // Trigger handleFullScreen function
    console.log('Full screen activated')
  };
  
  return (
    <div className="term">
      <dt>        
        <span className="video" role="img">
            {props.video}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <button onClick={handleFullScreenClick}>View Fullscreen</button> {/* Check button click handling */}
    </div>
  );
}

export default Card;