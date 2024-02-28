import React from 'react';
import MoneySection1 from './MoneySection1';
import MoneySection2 from './MoneySection2';


function Money() {
  return (
    <div>
      Concerns
      <MoneySection1 /> 
      <hr />
      Proposals
      <MoneySection2 />
    </div>
  )
}

export default Money;
