"use client";

import { useState } from "react";

export default function Estado() {
  let [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(++numero);
  }

  return (
    <div>
      <h1>Componente com Estado</h1>
      <div>{numero}</div>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
