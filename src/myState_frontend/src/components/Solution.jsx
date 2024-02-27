import React from "react";
import Card from "./Card";


const solution = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-15min:9?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,    
    name: "Freedoms - Summary",
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
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-Vaccine:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" ></iframe>,
    name: "Inflation",
    meaning: "No internet? No problem! Send coins with the power of texting.",
    link: "http://google.com",
  },
  {
    id: 3,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" ></iframe>,
    name: "Pollution",
    meaning:
      "Send coins to your pals via mobile number, email, or give Mark Zuckerberg a nudge on Facebook.",
  },
  {
    id: 4,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "War",
    meaning:
      "Oops, sent coins to the wrong address? No worries, hit the 'Dipute' button and blame it on your cat.",
  },
  
];


function createCard(props) {
  return (
    <Card
      key={props.id}
      video={props.video}
      name={props.name}
      description={props.meaning}
      ID={props.id}
      link={props.link}
    />
  );
}

function CardsField() {
  return (
    <div>
      <dl className="dictionary">{solution.map(createCard)}</dl>
    </div>
  );
}
export default CardsField;
