import React from "react";
// import Filho from "./Filho";

import { childrenWithProps } from "../utils/utils";

// export default (props) => (
//   <div>
//     <h1>
//       {props.nome} {props.sobrenome}
//     </h1>
//     <h2>Filhos</h2>
//     <ul>
//       <Filho nome="Pedro" sobrenome={props.sobrenome} />
//       <Filho {...props} />
//       <Filho {...props} nome="Carla" />
//     </ul>
//   </div>
// );

export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>
    <ul>
      {/* {props.children} */}
      {
        // Apenas Um
        // React.cloneElement(props.children, {
        //   ...props,
        //   ...props.children.props,
        // })
        //
        // Vários
        // React.Children.map(props.children, (child) => {
        //   return React.cloneElement(child, {
        //     ...props,
        //     ...child.props,
        //   });
        // })
      }
      {childrenWithProps(props)}
    </ul>
  </div>
);
