import React from "react";
import Card from "./Card";
import { useFullScreenHandle } from 'react-full-screen';


const freedom = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-Summary-Solution:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"  allowFullScreen></iframe>,    
    name: "15-minute cities",
    meaning: (
      <span>
        Set up
        <div className="tooltip">
          " your e-money "<span className="tooltiptext">Tooltip text</span>
        </div>
        faster than your gmail account!
      </span>
    ),
    link: "http://youtube.com",
  },
  
];

function CardsField() {
  const handle = useFullScreenHandle();
  
  const createCard = (props) => {
    return (
      <Card
        key={props.id}
        video={props.video}
        name={props.name}
        description={props.meaning}
        ID={props.id}
        link={props.link}
        handleFullScreen={handle.enter}
      />
    );
  };

  return (
    <div>
      <dl className="dictionary">{freedom.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
