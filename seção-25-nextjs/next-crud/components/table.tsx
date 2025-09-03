"use client";

import Cliente from "../core/Cliente";
import { PencilSquare, Trash } from "./icones";
import { JSX } from "react";

interface TableProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Table(props: TableProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function thead() {
    return (
      <thead
        className={`
          bg-gradient-to-r from-purple-500 to-purple-800 
          text-gray-100
      `}
      >
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          {exibirAcoes && <th className="p-4">Ações</th>}
        </tr>
      </thead>
    );
  }

  function tbody() {
    return (
      <tbody>
        {props.clientes.map((cliente, i) => {
          return (
            <tr
              key={cliente.id}
              className={i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
            >
              <td className="text-left p-4 font-semibold">{cliente.id}</td>
              <td className="text-left p-4 font-semibold">{cliente.nome}</td>
              <td className="text-left p-4 font-semibold">{cliente.idade}</td>
              {exibirAcoes && acoes(cliente)}
            </tr>
          );
        })}
      </tbody>
    );
  }

  function acoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado &&
          buttonAcao(PencilSquare, "text-green-600", () =>
            props.clienteSelecionado?.(cliente)
          )}

        {props.clienteExcluido &&
          buttonAcao(Trash, "text-red-500", () =>
            props.clienteExcluido?.(cliente)
          )}
      </td>
    );
  }

  function buttonAcao(icon: JSX.Element, color?: string, onClick?: () => void) {
    return (
      <button
        onClick={() => onClick?.()}
        className={`
          flex justify-center items-center
          ${color} rounded-full p-2 m-1
          hover:bg-purple-50
          `}
      >
        {icon}
      </button>
    );
  }

  return (
    <table
      className={`
        w-full
        rounded-xl overflow-hidden
     `}
    >
      {thead()}
      {tbody()}
    </table>
  );
}
