import { Layout } from '../components/Layout/index';
import { Table } from '../components/Table/index';
import { Cliente } from '../core/Cliente';

export default function Home() {
  const clientes = [
    new Cliente('Jean', 27, 1),
    new Cliente('Maida', 30, 2),
    new Cliente('Giulia', 22, 3),
    new Cliente('Mãe', 45, 4),
  ];

  return (
    <div className=" bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-2xl flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        <Table clientes={clientes}></Table>
      </Layout>
    </div>
  );
}
