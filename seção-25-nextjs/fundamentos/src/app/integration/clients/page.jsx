"use client";

import { useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  async function getClients() {
    const res = await fetch(`http://localhost:3000/api/clients`);
    const data = await res.json();

    console.log("data:", data);

    // setClients(data.clients);
  }

  getClients();

  return <h1>Clientes</h1>;
}
