import React, { useEffect, useState } from "react";

import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "@/firebase/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } =
    useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => obterTodos(), []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selectionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function exlcuirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    exlcuirCliente,
    selectionarCliente,
    obterTodos,
    /****/
    tabelaVisivel,
    formularioVisivel,
    exibirTabela,
    exibirFormulario,
  };
}
