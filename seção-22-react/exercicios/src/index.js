import React from "react";
import ReactDOM from "react-dom/client";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import Multi, { BoaTarde, BoaNoite } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1>React</h1>);

// root.render(<Primeiro />);

// root.render(<BomDia nome="Pedro" />);

// root.render(
//   <div>
//     <Multi.BoaTarde nome="Pedro" />
//     <BoaNoite nome="Pedro" />
//   </div>
// );

// root.render(
//   <div>
//     <Saudacao tipo="Bom dia" nome="Pedro" />
//   </div>
// );

root.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" sobrenome="Silva" />
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
  </div>
);
