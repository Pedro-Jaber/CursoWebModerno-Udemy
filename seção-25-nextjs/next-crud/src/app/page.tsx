"use client";

import React from "react";

import Title from "../../components/title";
import Table from "../../components/table";
import Botao from "../../components/Botao";
import Formlario from "../../components/Formulario";
import useClientes from "../../hooks/useClientes";

export default function Home() {
  const {
    selectionarCliente,
    exlcuirCliente,
    salvarCliente,
    novoCliente,
    cliente,
    clientes,
    /****/
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <React.Fragment>
      {/* Header */}
      <Title>Teste</Title>
      {/* Body */}
      <div className="flex flex-col p-5">
        <div className="mb-4 flex justify-end ">
          <Botao cor="green" onClick={novoCliente}>
            Novo Cliente
          </Botao>
        </div>

        <div className="flex flex-col">
          {tabelaVisivel ? (
            <Table
              clientes={clientes}
              selectionarCliente={selectionarCliente}
              exlcuirCliente={exlcuirCliente}
            />
          ) : (
            <Formlario
              cliente={cliente}
              cancelado={() => exibirTabela}
              clienteMudou={salvarCliente}
            />
          )}
        </div>
      </div>
      {/* Footer */}
    </React.Fragment>
  );
}
