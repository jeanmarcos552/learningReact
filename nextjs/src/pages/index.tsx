import { useState } from 'react';
import { Button } from '../components/Button/index';
import { Form } from '../components/Form/index';
import { Layout } from '../components/Layout/index';
import { Table } from '../components/Table/index';
import { Cliente } from '../core/Cliente';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [clienteSelected, setClienteSelected] = useState<Cliente>();

  const clientes = [
    new Cliente('Jean', 27, 1),
    new Cliente('Maida', 30, 2),
    new Cliente('Giulia', 22, 3),
    new Cliente('Mãe', 45, 4),
  ];

  function handleEdit(value: Cliente) {
    setShowForm(true);
    setClienteSelected(value);
  }

  function handleDelete(value: Cliente) {
    setShowForm(true);
    setClienteSelected(value);
  }

  function handleNewCliente() {
    setShowForm(!showForm);
    setClienteSelected(new Cliente('', 0));
  }

  return (
    <div className=" bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-2xl flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        {!showForm && (
          <div className="flex justify-end">
            <Button
              onClick={() => handleNewCliente()}
              color="green"
              className="mb-4"
            >
              Novo cliente
            </Button>
          </div>
        )}
        {!showForm ? (
          <Table
            clientes={clientes}
            handleDelet={handleDelete}
            handleEdit={handleEdit}
          />
        ) : (
          <Form
            cliente={clienteSelected}
            handleCancel={() => setShowForm(!showForm)}
            handleSave={() => setShowForm(!showForm)}
          />
        )}
      </Layout>
    </div>
  );
}
