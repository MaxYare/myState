import React from "react";

function Intro() {
  return (
    <div>
      <hr style={{ color: 'red', height: '2px', margin: '10px' }} />
      <div className="video-container"> {/* Added a container div */}
        <iframe
          className="video-intro"
          width="100%"
          height="56.25vw" // 16:9 aspect ratio
          src="https://odysee.com/$/embed/@myState:b/myState-Theia:e?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"
          frameborder="0" allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
export default Intro;
