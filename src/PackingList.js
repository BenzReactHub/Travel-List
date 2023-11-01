import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems = [];

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) {
      setItems([]);
    }
  }

  if (sortBy === "input") {
    sortedItems = items.slice().sort((a, b) => +a.quantity - +b.quantity);
  }
  if (sortBy === "descrition") {
    // eslint-disable-next-line array-callback-return
    sortedItems = items.slice().sort((a, b) => {
      if (
        String(a.description).toLowerCase() <
        String(b.description).toLowerCase()
      )
        return -1;
      if (
        String(a.description).toLowerCase() >
        String(b.description).toLowerCase()
      )
        return 1;
    });
  }
  if (sortBy === "packed") {
    // eslint-disable-next-line array-callback-return
    sortedItems = items.slice().sort((a, b) => {
      if (a.packed) return -1;
      if (b.packed) return 1;
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="descrition">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearItems}>Clear List</button>
      </div>
    </div>
  );
}
