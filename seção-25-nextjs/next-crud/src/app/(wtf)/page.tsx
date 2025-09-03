"use client";

import React, { useState } from "react";

import Title from "../../../components/title";
import Table from "../../../components/table";
import Cliente from "../../../core/Cliente";
import Botao from "../../../components/Botao";
import Formlario from "../../../components/Formulario";

export default function Home() {
  const clientes = [
    new Cliente("Joaquim", 34, "1"),
    new Cliente("Maria", 25, "2"),
    new Cliente("Pedro", 54, "3"),
    new Cliente("Ana", 18, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  return (
    <React.Fragment>
      {/* Header */}
      <Title>Teste</Title>
      {/* Body */}
      <div className="flex flex-col p-5">
        <div className="mb-4 flex justify-end ">
          <Botao cor="green" onClick={() => setVisivel("form")}>
            Novo Cliente
          </Botao>
        </div>

        <div className="flex flex-col">
          {visivel === "tabela" ? (
            <Table
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          ) : (
            <Formlario
              cliente={clientes[0]}
              cancelado={() => setVisivel("tabela")}
              clienteMudou={salvarCliente}
            />
          )}
        </div>
      </div>
      {/* Footer */}
    </React.Fragment>
  );
}
