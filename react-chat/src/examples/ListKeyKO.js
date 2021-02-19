import * as React from "react";

const allItems = [
  { id: "manzana", value: "🍎 manzana" },
  { id: "naranja", value: "🍊 naranja" },
  { id: "uvas", value: "🍇 uvas" },
  { id: "pera", value: "🍐 pera" },
];

function App() {
  const [items, setItems] = React.useState(allItems);

  function addItem() {
    setItems([
      ...items,
      allItems.find((i) => !items.map(({ id }) => id).includes(i.id)),
    ]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i.id !== item.id));
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        añadir item
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          // Añadir una prop 'key' al <li> siguiente. Que sea item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>eliminar</button>{" "}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
