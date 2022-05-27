import { Cliente } from '../../core/Cliente';

interface TableProp {
  clientes: Cliente[];
}

export function Table({ clientes }: TableProp) {
  function renderHead() {
    return (
      <tr className="bg-gradient-to-r to-purple-400 from-purple-800">
        <td className="p-4  text-gray-100">ID</td>
        <td className="p-4  text-gray-100">Nome</td>
        <td className="p-4  text-gray-100">Idade</td>
      </tr>
    );
  }

  function renderBody(dados?: Array<Cliente>) {
    return dados?.map((item, i) => (
      <tr
        key={item.id}
        className={i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}
      >
        <td className="p-4 text-purple-800">{item.id}</td>
        <td className="p-4 text-purple-800" key={item.id}>
          {item.name}
        </td>
        <td className="p-4 text-purple-800" key={item.id}>
          {item.age}
        </td>
      </tr>
    ));
  }
  return (
    <table className="w-full rounded-t-xl rounded-b-xl overflow-hidden">
      <thead className="">{renderHead()}</thead>
      <tbody>{renderBody(clientes)}</tbody>
    </table>
  );
}
