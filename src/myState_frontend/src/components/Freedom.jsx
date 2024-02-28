import React from 'react';
import FreedomSection1 from './FreedomSection1';
import FreedomSection2 from './FreedomSection2';


function Freedom() {
  return (
    <div>
      Concerns
      <FreedomSection1 /> 
      <hr />
      Proposals
      <FreedomSection2 />
    </div>
  )
}

export default Freedom;