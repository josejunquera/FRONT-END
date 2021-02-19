import * as React from "react";
import "./box-styles.css";

// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`
const smallBox = <div>small lightblue box</div>;
const mediumBox = <div>medium pink box</div>;
const largeBox = <div>large orange box</div>;

function Styles() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default Styles;
