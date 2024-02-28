import React from 'react';
import Card from './Card';
import { useFullScreenHandle } from 'react-full-screen';


const money = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Inflation:5?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"  allowFullScreen></iframe>,    
    name: "Inflation",
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
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Pollution:b?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowfullscreen></iframe>,
    name: "Pollution",
    meaning: "No internet? No problem! Send coins with the power of texting.",
    link: "http://google.com",
  },
  {
    id: 3,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-War:b?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "War",
    meaning:
      "Send coins to your pals via mobile number, email, or give Mark Zuckerberg a nudge on Facebook.",
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
      <dl className="dictionary">{money.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
