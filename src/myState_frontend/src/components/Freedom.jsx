import React from "react";
import Card from "./Card";
import { useFullScreenHandle } from 'react-full-screen';


const freedom = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-15min:9?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowFullScreen></iframe>,    
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
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-Vaccine:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" ></iframe>,
    name: "Carbon Credits",
    meaning: "No internet? No problem! Send coins with the power of texting.",
    link: "http://google.com",
  },
  {
    id: 3,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen></iframe>,
    name: "CBDCs",
    meaning:
      "Send coins to your pals via mobile number, email, or give Mark Zuckerberg a nudge on Facebook.",
  },
  {
    id: 4,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "Censorship",
    meaning:
      "Oops, sent coins to the wrong address? No worries, hit the 'Dipute' button and blame it on your cat.",
  },
  {
    id: 5,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "Digital IDs",
    meaning:
      "Shake your phones like you're in a dance-off and watch the magic of payment happen.",
  },
  {
    id: 6,
    video: <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
    name: "The Great Reset",
    meaning:
      "Customize rewards for your business coins, because who doesn't want a free pet unicorn.",
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
