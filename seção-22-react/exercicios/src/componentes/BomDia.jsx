import React, { Fragment } from "react";

// export default (props) => (
//   <div>
//     <h1>Bom dia, {props.nome}!</h1>
//     <h2>Até breve</h2>
//   </div>
// );

// export default (props) => [
//   <h1 key="1">Bom dia, {props.nome}!</h1>,
//   <h2 key="2">Até breve</h2>,
// ];

// export default (props) => (
//   <React.Fragment>
//     <h1>Bom dia, {props.nome}!</h1>
//     <h2>Até breve</h2>
//   </React.Fragment>
// );

export default (props) => (
  <Fragment>
    <h1>Bom dia, {props.nome}!</h1>
    <h2>Até breve</h2>
  </Fragment>
);
