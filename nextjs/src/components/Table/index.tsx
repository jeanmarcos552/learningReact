import { Cliente } from '../../core/Cliente';
import { IconeEdit, IconeTrash } from '../icons/index';

interface TableProp {
  clientes: Cliente[];
}

export function Table({ clientes }: TableProp) {
  function renderHead() {
    return (
      <tr className="bg-gradient-to-r to-purple-400 from-purple-800 items-center">
        <td className="p-4  text-gray-100">ID</td>
        <td className="p-4  text-gray-100">Nome</td>
        <td className="p-4  text-gray-100">Idade</td>
        <td className="p-4  text-gray-100">Ação</td>
      </tr>
    );
  }

  function actions() {
    return (
      <td className="p-4">
        <button className="text-green-500  hover:bg-white transition rounded-full p-1">
          {IconeEdit}
        </button>
        <button className="text-red-600  hover:bg-white transition rounded-full p-1 ">
          {IconeTrash}
        </button>
      </td>
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

        {actions()}
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
