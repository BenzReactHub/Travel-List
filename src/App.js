import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Chargers", quantity: 1, packed: false },
  { id: 4, description: "Iphones", quantity: 15, packed: true },
  { id: 5, description: "Apples", quantity: 8, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
