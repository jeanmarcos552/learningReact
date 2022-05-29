import { useState } from 'react';
import { Cliente } from '../../core/Cliente';
import { Button } from '../Button/index';
import { Input } from '../Input/index';

interface FormProp {
  cliente: Cliente;
  handleCancel?: any;
  handleSave?: any;
}

export function Form({ cliente, handleCancel, handleSave }: FormProp) {
  const [nome, setNome] = useState(cliente?.name || '');
  const [idade, setIdade] = useState(cliente.age || 0);

  return (
    <form>
      {cliente.id && (
        <Input
          label="#ID"
          name="id"
          defaulValue={cliente.id}
          disabled
          className="mb-4"
        />
      )}

      <Input
        label="Nome"
        name="name"
        defaulValue={nome}
        handleChange={setNome}
        className="mb-4"
      />

      <Input
        label="Idade"
        name="idade"
        defaulValue={idade}
        handleChange={setIdade}
        type="number"
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleCancel} className="mr-3">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="blue">
          {cliente.id ? 'Alterar' : 'Salvar'}
        </Button>
      </div>
    </form>
  );
}
