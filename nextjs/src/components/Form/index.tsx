import { useState } from 'react';
import { Input } from '../Input/index';

export function Form() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);
  return (
    <form>
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
    </form>
  );
}
