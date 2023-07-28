import { useState } from "react";

const Card = ({ projets }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      // voir la doc sur les "mouse events"
      // https://fr.reactjs.org/docs/events.html#mouse-events
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        console.log("J'ai cliqué");
        //navigator.clipboard.writeText(emoji.symbol);
        // lien vers la solution
        // Google : react copy to clipboard
        // https://stackoverflow.com/a/52033479
      }}
      className="Card"
    >
      <span>
        {projets.titre} - {projets.date} - {projets.montant} - {projets.comment} - {projets.nombre}
      </span>
      {hoverLine && <span className="copy-span">Click to copy !</span>}
    </div>
  );
};

export default Card;