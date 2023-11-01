export default function Item({ item, setItems }) {
  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function setItemPackStatus(id, status) {
    // console.log(id, status)
    setItems((prevItems) =>
      prevItems.filter((item) => {
        if (item.id === id) {
          item.packed = status;
        }
        return item;
      }),
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => {
          setItemPackStatus(item.id, e.target.checked);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
