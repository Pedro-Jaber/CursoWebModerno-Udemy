// Não funciona em app router
// export function getStaticProps() {
//   return {
//     props: {
//       numero: Math.random(),
//     },
//   };
// }

export default function Estatico() {
  return (
    <div>
      <h1>{Math.random()}</h1>
    </div>
  );
}
