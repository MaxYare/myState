import React from "react";

function Intro() {
  return (
    <div className="video-container"> {/* Added a container div */}
      <iframe
        className="video-intro"
        width="100%"
        height="100vh" 
        src="https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Intro;
