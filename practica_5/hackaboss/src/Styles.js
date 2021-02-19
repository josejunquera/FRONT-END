import * as React from "react";
import "./box-styles.css";

// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{ backgroundColor: "pink", fontStyle: "italic" }}
//   >
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{ backgroundColor: "red", fontStyle: "italic" }}
//   >
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{ backgroundColor: "green", fontStyle: "italic" }}
//   >
//     large orange box
//   </div>
// );

function Box(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}

const Styles = (props) => (
  <div>
    <Box
      className="box box--small"
      style={{ backgroundColor: "green", fontStyle: "italic" }}
    >
      small blue box
    </Box>
    <Box
      className="box box--medium"
      style={{ backgroundColor: "red", fontStyle: "italic" }}
    >
      small blue box
    </Box>
    <Box
      className="box box--large"
      style={{ backgroundColor: "yellow", fontStyle: "italic" }}
    >
      small blue box
    </Box>
  </div>
);

export default Styles;
