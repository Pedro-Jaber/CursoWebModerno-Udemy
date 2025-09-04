interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  const inputName = props.texto.toLowerCase().replace(" ", "_");

  return (
    <div className={`flex flex-col ${props.className}`}>
      <label htmlFor={`${inputName}`} className="mb-2">
        {props.texto}
      </label>
      <input
        name={`${inputName}`}
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none 
          px-4 py-2
          ${props.somenteLeitura ? "bg-gray-200" : "bg-white"}
          ${props.somenteLeitura ? "" : "focus:bg-purple-50"}
        `}
      />
    </div>
  );
}
