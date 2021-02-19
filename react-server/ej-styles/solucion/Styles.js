import * as React from "react";
import "./box-styles.css";
// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`

const Box = ({ className, style, children }) => {
  const finalStyle = { 
    backgroundColor: "lightblue",
    fontSize: "large",
    fontStyle: 'italic',
    ...style,
  };
  const tmpClassName = className ?? 'box--medium';
  const finalClassName = `box ${tmpClassName}`;
  return (
    <div
      className={finalClassName}
      style={finalStyle}
    >
      {children}
    </div>
  );
};

function Styles() {
  return (
    <div>
      <Box
        className="box--small"
        style={{ backgroundColor: "lightblue" }}
      >
        small lightblue box 2
      </Box>
      <Box
        className="box--medium"
        style={{ backgroundColor: "pink" }}
      >
        medium pink box
      </Box>
      <Box
        style={{ backgroundColor: "orange" }}
      >
        large orange box
      </Box>     
    </div>
  );
}

export default Styles;
